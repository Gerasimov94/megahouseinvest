export const COMPANY_CONTACTS = {
  phone: {
    display: '+7-900-184-77-77',
    tel: '+79001847777',
    href: 'tel:+79001847777'
  },

  email: {
    display: 'megahouseinvest@mail.ru',
    href: 'mailto:megahouseinvest@mail.ru'
  },

  address: {
    display: 'Ул.Текучева 238/73'
  },

  workingHours: {
    weekdays: 'Пн-Пт: 9:00 - 18:00',
    weekends: 'Сб-Вс: 10:00 - 16:00',
    full: 'Пн-Пт: 9:00 - 18:00\nСб-Вс: 10:00 - 16:00'
  }
} as const;

export const COMPANY_INFO = {
  name: 'МегаХаусИнвест',
  fullName: 'MegaHouse Invest',
  yearFounded: 2019,
  experience: '7 лет',
  completedProjects: '50+'
} as const;
