import { ServicesData, TableData } from "../components/Table/Table";

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
