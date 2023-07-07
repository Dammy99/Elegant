import { ServicesData, TableData } from "../components/Table/Table";

interface Circles {
  navigation: string;
  src: string;
  alt: string;
}

interface CirclesArray {
  data: Circles[];
}

interface ServicesList {
  data: { service: string; link: string };
}

export const circlesData: CirclesArray = {
  data: [
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "../../../public/11.png",
      alt: "Стрижки",
    },
    {
      navigation: "/price/hairdressingService?current=Фарбування",
      src: "../../../public/1_dyeing_icon.png",
      alt: "Фарбування",
    },
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "../../../public/1_vidnovlennya_icon.png",
      alt: "Відновлення волосся",
    },
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "../../../public/1_keratin_icon.png",
      alt: "Кератинове вирівнювання",
    },
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "../../../public/1_manicure_icon.png",
      alt: "Манікюр",
    },
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "../../../public/1_eyebrows_icon.png",
      alt: "Брови та вії",
    },
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "../../../public/1_hairdo_icon.png",
      alt: "Зачіски",
    },
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "../../../public/1_dohlyad_za_volossyam.png",
      alt: "Догляд за волоссям",
    },
  ],
};

const parsedServices: ServicesData[] = [
  { name: "Service 1", price: "100" },
  { name: "Service 2", price: "200" },
  { name: "Service 3", price: "300" },
];

export const hairdressingServices: TableData[] = [
  {
    bigTable: true,
    tableName: "Стрижки",
    data: [
      {
        name: "Стрижка жіноча (з сушкою)",
        price: "250",
        secondPrice: "300-400",
        thirdPrice: "400-500",
      },
      { name: "Стрижка чоловіча", price: "200 - 270" },
      { name: "Стрижка дитяча", price: "250 - 500" },
      { name: "Стрижка кінчиків", price: "200" },
      { name: "Стрижка гривки", price: "100" },
      { name: "Стрижка бороди від довжини", price: "150 - 200" },
      { name: "Стрижка вус", price: "70" },
    ],
  },
  {
    data: [
      { name: "Прикореневе (робота + миття + сушка)", price: "400 - 500" },
      { name: "По всій довжині (робота + миття + сушка)", price: "400 - 700" },
    ],
    tableName: "Фарбування",
  },
];

export const manicureService: TableData[] = [
  {
    tableName: "Манік",
    data: [
      { name: "Стрижка жіноча (з сушкою)", price: "250 - 500" },
      { name: "Стрижка чоловіча", price: "200 - 270" },
      { name: "Стрижка дитяча", price: "250 - 500" },
      { name: "Стрижка кінчиків", price: "200" },
      { name: "Стрижка гривки", price: "100" },
      { name: "Стрижка бороди від довжини", price: "150 - 200" },
      { name: "Стрижка вус", price: "70" },
    ],
  },
  {
    data: [
      { name: "Прикореневе (робота + миття + сушка)", price: "400 - 500" },
      { name: "По всій довжині (робота + миття + сушка)", price: "400 - 700" },
    ],
    tableName: "Фабік",
  },
];

export const eyebrowsAndEyelashes: TableData[] = [
  {
    tableName: "Брови",
    data: [
      { name: "Стрижка жіноча (з сушкою)", price: "250 - 500" },
      { name: "Стрижка чоловіча", price: "200 - 270" },
      { name: "Стрижка дитяча", price: "250 - 500" },
      { name: "Стрижка кінчиків", price: "200" },
      { name: "Стрижка гривки", price: "100" },
      { name: "Стрижка бороди від довжини", price: "150 - 200" },
      { name: "Стрижка вус", price: "70" },
    ],
  },
  {
    data: [
      { name: "Прикореневе (робота + миття + сушка)", price: "400 - 500" },
      { name: "По всій довжині (робота + миття + сушка)", price: "400 - 700" },
    ],
    tableName: "Воки",
  },
];
