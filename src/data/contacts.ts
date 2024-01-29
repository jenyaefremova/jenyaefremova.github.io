import { IContacts } from '../models';

export const contacts: IContacts = {
  id: 1,
  title: 'Мои контакты',
  description: 'Если у вас есть какие-либо вопросы, вы можете связаться со мной по следующим контактам:',
  image: 'https://i.imgur.com/CiHoHG6.jpeg?1',
  contact: [
      
        
    {
      id: 2,
      title: 'tg: @avocadohaas',
      link: 'https://t.me/avocadohaas'
    },
    {
      id: 5,
      title: 'e.efremova2805@gmail.com',
      link: 'mailto:e.efremova2805@gmail.com'
    },
    {
      id: 4,
      title: '+66 63-082-88-96',
      link: 'tel:+66630828896'
    },
    {
      id: 1,
      title: 'github',
      link: 'https://github.com/jenyaefremova'
    },
    {
      id: 3,
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/evgeniia-efremova-122934209/'
    }
  ]
}
