import puppyphoto from "../../assets/images/puppy.jpeg";

export interface Puppy {
  id: number;
  birthDate: string;
  available: number;
  litter: string;
  parents: string;
  description: string;
  images: string[];
}

export const puppiesData: Puppy[] = [
  {
    id: 1,
    birthDate: "01.01.2025",
    available: 3,
    litter: "Помет #1",
    parents: "Рекс × Альма",
    description: "Крепкие, здоровые щенки с отличной родословной",
    images: [puppyphoto, puppyphoto, puppyphoto, puppyphoto],
  },
  {
    id: 2,
    birthDate: "10.02.2025",
    available: 2,
    litter: "Помет #2",
    parents: "Барон × Лада",
    description: "Сильные, умные щенки с отличными рабочими качествами",
    images: [puppyphoto, puppyphoto, puppyphoto, puppyphoto],
  },
];
