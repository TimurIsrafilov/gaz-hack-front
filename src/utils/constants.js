export const companyDiagram = {
  components: [
    {
      name: "Компонента 1",
      id: 101,
    },
    {
      name: "Компонента 2",
      id: 102,
    },
    {
      name: "Компонента 3",
      id: 103,
    },
  ],

  departments: [
    {
      name: "Дизайн",
      id: 201,
      componentsId: [101, 102, 103],
    },
    {
      name: "Девелопмент",
      id: 202,
      componentsId: [101, 102, 103],
    },
    {
      name: "Анализ",
      id: 203,
      componentsId: [101, 102, 103],
    },
    {
      name: "Менеджмент",
      id: 204,
      componentsId: [101, 102, 103],
    },
    {
      name: "Маркетинг",
      id: 205,
      componentsId: [101, 102, 103],
    },
    {
      name: "HR",
      id: 206,
      componentsId: [101, 102, 103],
    },
    {
      name: "Девопсы",
      id: 207,
      componentsId: [101, 102, 103],
    },
  ],

  teams: [
    {
      name: "Команда Дизайн 1",
      id: 301,
      departmentId: 201,
    },
    {
      name: "Команда Дизайн 2",
      id: 302,
      departmentId: 201,
    },
    {
      name: "Команда Девелопмент 1",
      id: 303,
      departmentId: 202,
    },
    {
      name: "Команда Девелопмент 2",
      id: 304,
      departmentId: 202,
    },
    {
      name: "Команда Анализ 1",
      id: 305,
      departmentId: 203,
    },
    {
      name: "Команда Анализ 2",
      id: 306,
      departmentId: 203,
    },
    {
      name: "Команда Менеджмент 1",
      id: 307,
      departmentId: 204,
    },
    {
      name: "Команда Менеджмент 2",
      id: 308,
      departmentId: 204,
    },
    {
      name: "Команда Маркетинг 1",
      id: 309,
      departmentId: 205,
    },
    {
      name: "Команда Маркетинг 2",
      id: 310,
      departmentId: 205,
    },
    {
      name: "Команда HR 1",
      id: 311,
      departmentId: 206,
    },
    {
      name: "Команда HR 2",
      id: 312,
      departmentId: 206,
    },
    {
      name: "Команда Девопсы 1",
      id: 313,
      departmentId: 207,
    },
    {
      name: "Команда Девопсы 2",
      id: 314,
      departmentId: 207,
    },
  ],
};

export const companyStructure = [
  {
    id: 401,
    first_name: "Вероника",
    last_name: "Некрасова",
    photo:
      "https://shkolafdorovka-r64.gosweb.gosuslugi.ru/netcat_files/9/167/avatar_5.png",
    position: "SEO",
    grade: "B",
    level: 1,
    teamId: null,
    boss: null,
    employment_type: "Full-time",
    timezone: "GMT",
  },
  {
    id: 402,
    first_name: "402",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-хэд",
    grade: "B",
    level: 2,
    teamId: null,
    boss: 401,
    employment_type: "Full-time",
    timezone: "GMT",
  },
  {
    id: 403,
    first_name: "403",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-лид-1",
    grade: "B",
    level: 3,
    teamId: 303,
    boss: 402,
    employment_type: "Full-time",
    timezone: "GMT",
  },
  {
    id: 404,
    first_name: "404",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-лид-2",
    grade: "B",
    level: 3,
    teamId: 304,
    boss: 402,
    employment_type: "Full-time",
    timezone: "GMT",
  },
  {
    id: 405,
    first_name: "405",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-разраб-1-Тим-1",
    grade: "B",
    level: 4,
    teamId: 303,
    boss: 403,
    employment_type: "Full-time",
    timezone: "GMT",
  },
  {
    id: 406,
    first_name: "406",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-разраб-2-Тим-1",
    grade: "B",
    level: 4,
    teamId: 303,
    boss: 403,
    employment_type: "Full-time",
    timezone: "GMT",
  },
  {
    id: 407,
    first_name: "407",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-разраб-1-Тим-2",
    grade: "B",
    level: 4,
    teamId: 303,
    boss: 404,
    employment_type: "Full-time",
    timezone: "GMT",
  },
  {
    id: 408,
    first_name: "408",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-разраб-2-Тим-2",
    grade: "B",
    level: 4,
    teamId: 303,
    boss: 404,
    employment_type: "Full-time",
    timezone: "GMT",
  },
];
