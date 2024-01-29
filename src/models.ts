export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export interface IPerson {
  id?: number;
  title: string
  subtitle?: string;
  description: string;
  image: string;
  button: {
    text: string;
    link: string;
  };
  additionalButton?: {
    text: string;
    link: string;
  };
}

export interface ITechnology {
  id?: number;
  title: string;
  icon: string;
}

export interface IResponsibility {
  id?: number;
  text: string;
}

export interface IJob {
  id?: number;
  jobTitle: string;
  dates: string;
  company: string;
  years: string;
  responsibilities: Array<IResponsibility>;
}

export interface IExperience {
  id?: number;
  title: string;
  job: Array<IJob>;
}

export interface IPlace {
  id?: number;
  placeTitle: string;
  dates: string;
  description: string;
}

export interface IEducation {
  id?: number;
  title: string;
  place: Array<IPlace>;
}

export interface IContact {
  id?: number;
  title: string;
  link: string;
}

export interface IContacts {
  id?: number;
  title: string;
  description?: string;
  image: string;
  contact: Array<IContact>;
}

export interface IWork {
  id?: number;
  title: string;
  description?: string;
  image: string;
  link: string;
}