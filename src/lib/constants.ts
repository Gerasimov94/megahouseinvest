export const PROJECTS_BASE_URL = 'https://s3.regru.cloud/megahouseinvest-s3/projects';

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
  completedProjects: '4'
} as const;

export const PROJECTS = [
  {
    id: 'house-107',
    title: 'Дом 107 м²',
    area: 107,
    description: 'Современный одноэтажный дом с террасой',
    baseUrl: `${PROJECTS_BASE_URL}/house-107`
  },
  {
    id: 'house-109',
    title: 'Дом 109 м²',
    area: 109,
    description: 'Уютный дом с продуманной планировкой',
    baseUrl: `${PROJECTS_BASE_URL}/house-109`
  },
  {
    id: 'house-110',
    title: 'Дом 110 м²',
    area: 110,
    description: 'Функциональный дом для комфортной жизни',
    baseUrl: `${PROJECTS_BASE_URL}/house-110`
  },
  {
    id: 'house-129',
    title: 'Дом 129 м²',
    area: 129,
    description: 'Дом с увеличенной площадью и панорамными окнами',
    baseUrl: `${PROJECTS_BASE_URL}/house-129`
  }
] as const;

export type Project = typeof PROJECTS[number];
