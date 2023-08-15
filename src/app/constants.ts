import { TableData } from "../components/Table/Table";
interface Circles {
  navigation: string;
  src: string;
  alt: string;
}

interface CirclesArray {
  data: Circles[];
}

export const circlesData: CirclesArray = {
  data: [
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "/image_icon_1.1.1.png",
      alt: "Стрижки",
    },
    {
      navigation: "/price/hairdressingService?current=Фарбування",
      src: "/image_icon_2.png",
      alt: "Фарбування",
    },
    {
      navigation: "/price/hairdressingService?current=Відновлення волосся",
      src: "/image_icon_3.png",
      alt: "Відновлення волосся",
    },
    {
      navigation:
        "/price/hairdressingService?current=Кератинове вирівнювання для",
      src: "/image_icon_4.png",
      alt: "Кератинове вирівнювання",
    },
    {
      navigation: "/price/manicureService?current=Манікюр",
      src: "/image_icon_5.png",
      alt: "Манікюр та педикюр",
    },
    {
      navigation: "/price/eyebrows&eyelashes?current=Брови та вії",
      src: "/image_icon_6.png",
      alt: "Брови та вії",
    },
    {
      navigation: "/price/hairdressingService?current=Укладка/зачіска",
      src: "/image_icon_7.png",
      alt: "Зачіски",
    },
    {
      navigation: "/price/hairdressingService?current=Стрижки",
      src: "/image_icon_8.png",
      alt: "Догляд за волоссям",
    },
  ],
};

export const hairdressingServices: TableData[] = [
  {
    tableName: "Стрижки",
    data: [
      { name: "Стрижка жіноча", price: "250 - 500" },
      { name: "Стрижка жіноча + миття голови", price: "350 - 650" },
      { name: "Стрижка чоловіча", price: "200 - 250" },
      { name: "Стрижка чоловіча + миття голови", price: "250 - 300" },
      { name: "Стрижка дитяча", price: "250" },
      { name: "Стрижка кінчиків", price: "200" },
      { name: "Стрижка гривки", price: "100" },
      { name: "Стрижка бороди", price: "150 - 200" },
      { name: "Полірування", price: "400 - 600" },
    ],
  },
  {
    tableName: "Фарбування",
    bigTable: true,
    data: [
      {
        name: "Прикореневе",
        price: "",
        secondPrice: "400",
        thirdPrice: "500",
      },
      {
        name: "По всій довжина",
        price: "400",
        secondPrice: "500",
        thirdPrice: "700",
      },
      {
        name: "Міліровка",
        price: "від 500",
        secondPrice: "від 700",
        thirdPrice: "від 1000",
      },
      {
        name: "Колорування",
        price: "від 700",
        secondPrice: "від 1000",
        thirdPrice: "від 1500",
      },
      {
        name: "Міліровка + Тонування",
        price: "від 800",
        secondPrice: "від 1000",
        thirdPrice: "від 1500",
      },
      {
        name: "AirTouch/Шатуш/Балаяж",
        price: "від 900",
        secondPrice: "від 1200",
        thirdPrice: "від 2000",
      },
    ],
  },
  {
    tableName: "Відновлення волосся",
    bigTable: true,
    data: [
      {
        name: "Реконструкція волосся",
        price: "від 400",
        secondPrice: "від 500",
        thirdPrice: "від 600",
      },
      {
        name: "Відновлення від Raywell",
        price: "від 500",
        secondPrice: "від 600",
        thirdPrice: "від 700",
      },
    ],
  },
  {
    tableName: "Кератинове вирівнювання для",
    data: [
      { name: "Чолки", price: "від 300" },
      { name: "Короткого волосся", price: "від 1500" },
      { name: "Середнього волосся", price: "від 2000" },
      { name: "Довгого волосся", price: "від 2500" },
    ],
  },
  {
    tableName: "Укладка/зачіска",
    data: [
      { name: "Укладка", price: "250 - 500 " },
      { name: "Укладка + миття голови", price: "300 - 700 " },
      { name: "Накрутка ", price: "400 - 800 " },
      { name: "Зачіска", price: "від 1000" },
      { name: "Весільна зачіска", price: "від 1800" },
    ],
  },
];

export const manicureService: TableData[] = [
  {
    tableName: "Манікюр",
    data: [
      { name: "Чистка", price: "200" },
      { name: "Ремонт нігтя", price: "50" },
      { name: "Покриття гель лаком (однотонне)", price: "300" },
      { name: "Покриття “French”", price: "350" },
      { name: "Покриття “градієнт”", price: "350" },
      { name: "Чистка + покриття", price: "450" },
      { name: "Чистка + “French”", price: "500" },
      { name: "Чистка + “градієнт”", price: "500" },
      { name: "Зняття гель лаку", price: "150" },
      { name: "Зняття гель лаку + чистка ", price: "350" },
      { name: "Зняття гель лаку + покриття", price: "400" },
      { name: "Зняття + чистка + покриття кольором", price: "500" },
      { name: "Зняття + чистка + “French”", price: "550" },
      { name: "Зняття + чистка + “градієнт”", price: "550" },
      { name: "Укріплення нігтів (гель, пудра)", price: "100" },
    ],
  },
  {
    tableName: "Педикюр",
    data: [
      { name: "Чистка нігтів + стопи", price: "400" },
      { name: "Чистка нігтів + стопи + покриття г. л. ", price: "500" },
      { name: "Зняття г. л. + чистка + покриття", price: "600" },
      { name: "Зняття гель лаку", price: "150" },
    ],
  },
];

export const eyebrowsAndEyelashes: TableData[] = [
  {
    tableName: "Брови та вії",
    data: [
      { name: "Корекція брів", price: "100" },
      { name: "Фарбування брів фарбою", price: "120 " },
      { name: "Фарбування брів хною", price: "200" },
      { name: "Фарбування брів фарбою + корекція", price: "200" },
      { name: "Фарбування брів хною + корекція", price: "300" },
      { name: "Фарбування вій", price: "100" },
    ],
  },
];
