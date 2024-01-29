import { IExperience } from '../models';

export const experience: IExperience = {
  id: 1,
  title: 'Work Experience',
  job: [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      company: 'Quintegro',
      dates: 'Февраль 2023 - настоящее время',
      years: '1 year 1 month',
      responsibilities: [
        { id: 1, text: 'Pазработка SPA с использованием React, управление приложением с помощью React hook' },
        { id: 2, text: 'Работа с API, управление асинхронными запросами и данными' },
        { id: 3, text: 'Typescript, zod, codegen для типизации, адаптивная верстка, scss, storybook' },
        { id: 4, text: 'Адаптивная верстка, scss, storybook' },
        { id: 5, text: 'Интеграция и управление контентом с использованием Sanity, командная работа и использование Git, code-review, работа в команде (продукт-дизайнер, QA, PO, scrum-мастер)' },
        { id: 6, text: 'Использование Git, git-flow, регулярное code-review' },
        { id: 7, text: 'Работа в команде (продукт-дизайнер, QA, PO, scrum-мастер), AGILE церемонии' }
      ]
    },
    {
      id: 2,
      jobTitle: 'HTML/CSS Developer, team lead',
      company: 'Data Driven Lab (FBS)',
      dates: 'Июнь 2019 - Ноябрь 2023',
      years: '3 years 6 months',
      responsibilities: [
        { id: 1, text: 'Верстка емейлов' },
        { id: 2, text: 'Верстка richmedia (анимированные страницы, которые появляются после нажатия на push-уведомление)' },
        { id: 3, text: 'Вёрстка лендингов и баннеров' },
        { id: 4, text: 'Управление командой из 3 человек' }
      ]
    }
  ]
}
