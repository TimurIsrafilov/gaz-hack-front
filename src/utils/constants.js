export const companyDiagram = {
  components: [
    {
      name: "Компонента 1",
      id: 101,
      departmentsId: [201, 202, 203, 204, 205, 206, 207],
    },
    {
      name: "Компонента 2",
      id: 102,
      departmentsId: [201, 202, 203, 204, 205, 206, 207],
    },
    {
      name: "Компонента 3",
      id: 103,
      departmentsId: [201, 202, 203, 204, 205, 206, 207],
    },
  ],

  departments: [
    {
      name: "Дизайн",
      id: 201,
      teamsId: [301, 302],
    },
    {
      name: "Девелопмент",
      id: 202,
      teamsId: [303, 304],
    },
    {
      name: "Анализ",
      id: 203,
      teamsId: [305, 306],
    },
    {
      name: "Менеджмент",
      id: 204,
      teamsId: [307, 308],
    },
    {
      name: "Маркетинг",
      id: 205,
      teamsId: [309, 310],
    },
    {
      name: "HR",
      id: 206,
      teamsId: [311, 312],
    },
    {
      name: "Девопсы",
      id: 207,
      teamsId: [313, 314],
    },
  ],

  teams: [
    {
      name: "Команда Дизайн 1",
      id: 301,
      users: [401, 402, 403],
    },
    {
      name: "Команда Дизайн 2",
      id: 302,
      users: [404, 405, 406],
    },
    {
      name: "Команда Девелопмент 1",
      id: 303,
      usersId: [403, 405, 406],
    },
    {
      name: "Команда Девелопмент 2",
      id: 304,
      usersId: [404, 407, 408],
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
