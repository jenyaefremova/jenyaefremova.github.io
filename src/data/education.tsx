import { IEducation } from "../models";

export const education: IEducation = 
  {
    id: 1,
    title: 'Education',
    place: [
    {
        id: 1,
        placeTitle: 'JavaScript',
        dates: 'Июнь 2022 - Август 2022',
        description: 
        'Основы JS такие как объекты, классы, массивы и функции, обработчики событий, DOM-модель'
        },
      {
        id: 2,
        placeTitle: 'Академия вёрстки Артёма Исламова',
        dates: 'Апрель 2019 - Июнь 2019',
        description: 'Курс WEB-Start 3.0 работе с графикой, дал азы HTML и CSS. Я изучила flexbox, познакомилась с библиотекой Bootstrap. Поработала с препроцессорами SASS и LESS. Узнала базовые команды GIT и методологию БЭМ. Дальше мы изучили JavaScript и jQuery, анимацию на CSS3, AJAX, PHP, Wordpress. Затронули CSS Grid, валидацию форм, аналитику для сайта.'
      },
      {
        id: 3,
        placeTitle: 'СПБГЭТУ "ЛЭТИ"',
        dates: 'Сент. 2008 - Июль 2012',
        description: 'Получила степень бакалавра техники и технологий по направлению «Биомедецинская инженерия».'
      }
    ]
  }

