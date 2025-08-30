import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const createTelegramMessage = (data: ContactFormData): string => {
  const currentDate = new Date().toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Moscow'
  });

  let message = `🏠 *НОВАЯ ЗАЯВКА С САЙТА*\n\n`;

  message += `📅 *Дата:* ${currentDate}\n\n`;

  message += `👤 *Имя:* ${data.name}\n`;
  message += `📞 *Телефон:* [${data.phone}](tel:${data.phone.replace(/[^+\d]/g, '')})\n`;

  if (data.email) {
    message += `📧 *Email:* ${data.email}\n`;
  }

  if (data.message) {
    message += `\n💬 *Сообщение:*\n${data.message}\n`;
  }

  message += `\n━━━━━━━━━━━━━━━━━━\n`;
  message += `🏗️ *MegaHouseInvest*\n`;
  message += `📋 Свяжитесь с клиентом в ближайшее время!`;

  return message;
};

// Функция для очистки номера телефона от маски
const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

// Функция для валидации номера телефона
const isValidPhoneNumber = (phone: string): boolean => {
  const cleanPhone = cleanPhoneNumber(phone);
  // Проверяем, что номер начинается с 7 и имеет 11 цифр
  return cleanPhone.length === 11 && cleanPhone.startsWith('7');
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны для заполнения' },
        { status: 400 }
      );
    }

    // Валидация формата телефона
    if (!isValidPhoneNumber(body.phone)) {
      return NextResponse.json(
        { error: 'Некорректный формат номера телефона. Используйте формат +7 (***) ***-**-**' },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured');
      return NextResponse.json(
        { error: 'Сервис временно недоступен. Попробуйте позже или свяжитесь по телефону.' },
        { status: 500 }
      );
    }

    const message = createTelegramMessage(body);

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const telegramResponse = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.text();
      console.error('Telegram API error:', errorData);

      return NextResponse.json(
        { error: 'Ошибка при отправке заявки. Попробуйте позже или свяжитесь по телефону.' },
        { status: 500 }
      );
    }

    const telegramData = await telegramResponse.json();
    console.log(telegramData);
    console.log('Message sent successfully:', telegramData);

    return NextResponse.json(
      {
        success: true,
        message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error:', error);

    return NextResponse.json(
      { error: 'Произошла непредвиденная ошибка. Попробуйте позже или свяжитесь с нами по телефону.' },
      { status: 500 }
    );
  }
}
