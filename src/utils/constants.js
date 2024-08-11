export const companyDiagram = {
  components: [
    {
      name: "Компонента 1",
      id: 101,
      // component_lead: id, // number
      teamId: [305, 303, 301],
      isActive: true, // boolean
      type: "mobile", // options: mobile, web, back
    },
    {
      name: "Компонента 2",
      id: 102,
      // component_lead: id, // number
      teamId: [302, 304, 313],
      isActive: true, // boolean
      type: "mobile", // options: mobile, web, back
    },
    {
      name: "Компонента 3",
      id: 103,
      // component_lead: id, // number
      teamId: [306, 314],
      isActive: true, // boolean
      type: "mobile", // options: mobile, web, back
    },
  ],

  departments: [
    {
      name: "Дизайн",
      id: 201,
      // department_lead: id, // number
      teamId: [301, 302],
    },
    {
      name: "Девелопмент",
      id: 202,
      // department_lead: id, // number
      teamId: [302, 303],
    },
    {
      name: "Анализ",
      id: 203,
      // department_lead: id, // number
      teamId: [305, 306],
    },
    {
      name: "Менеджмент",
      id: 204,
      // department_lead: id, // number
      teamId: [307, 308],
    },
    {
      name: "Маркетинг",
      id: 205,
      // department_lead: id, // number
      teamId: [309, 310],
    },
    {
      name: "HR",
      id: 206,
      // department_lead: id, // number
      teamId: [311, 312],
    },
    {
      name: "Девопсы",
      id: 207,
      // department_lead: id, // number
      teamId: [313, 314],
    },
  ],

  teams: [
    {
      name: "Команда Дизайн 1",
      id: 301,
      // team_lead: id, // number
      componentId: [101],
      usersId: [404, 406, 407],
      // departmentId: id, // number
      performance: "", // описание
      description: "", // описание
      links: [
        "https://telegram.org",
        "https://myteam.mail.ru/webim",
        "https://www.atlassian.com/ru/software/jira",
      ],
    },
    {
      name: "Команда Дизайн 2",
      id: 302,
      // team_lead: id, // number
      componentId: [102],
      usersId: [405, 408, 409],
    },
    {
      name: "Команда Девелопмент 1",
      id: 303,
      // team_lead: id, // number
      componentId: [101],
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Девелопмент 2",
      id: 304,
      // team_lead: id, // number
      componentId: [102],
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Анализ 1",
      id: 305,
      // team_lead: id, // number
      componentId: [101],
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Анализ 2",
      id: 306,
      // team_lead: id, // number
      componentId: [103],
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Менеджмент 1",
      id: 307,
      // team_lead: id, // number
      componentId: null,
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Менеджмент 2",
      id: 308,
      // team_lead: id, // number
      componentId: null,
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Маркетинг 1",
      id: 309,
      // team_lead: id, // number
      componentId: null,
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Маркетинг 2",
      id: 310,
      // team_lead: id, // number
      componentId: null,
      usersId: [404, 407, 408],
    },
    {
      name: "Команда HR 1",
      id: 311,
      // team_lead: id, // number
      componentId: null,
      usersId: [404, 407, 408],
    },
    {
      name: "Команда HR 2",
      id: 312,
      // team_lead: id, // number
      componentId: null,
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Девопсы 1",
      id: 313,
      // team_lead: id, // number
      componentId: [101],
      usersId: [404, 407, 408],
    },
    {
      name: "Команда Девопсы 2",
      id: 314,
      // team_lead: id, // number
      componentId: [102],
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
    departmentId: 201,
    boss: null,
    town: "Москва",
    employment_type: "Штатные",
    timezone: "GMT",
    contacts: {
      link: [
        "https://www.ao.com/",
        "https://www.aokjkjh.com/",
        "https://www.aokjkjh.com/",
      ],
      email: ["eleonora_1985@example.com", "eleohjjkgnora_1985@example.com"],
      phone: ["+7 (691) 654-2862", "+7 (691) 654-8962"],
    },
  },
  {
    id: 402,
    first_name: "402",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-хэд",
    grade: "A",
    level: 2,
    teamId: null,
    departmentId: 202,
    boss: 401,
    town: "Москва",
    employment_type: "Аутсорс",
    timezone: "GMT1",
    contacts: {
      link: [
        "https://www.ao.com/",
        "https://www.aokjkjh.com/",
        "https://www.aokjkjh.com/",
      ],
      email: ["eleonora_1985@example.com", "eleohjjkgnora_1985@example.com"],
      phone: ["+7 (691) 654-2862", "+7 (691) 654-8962"],
    },
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
    departmentId: 203,
    boss: 402,
    town: "Москва",
    employment_type: "Штатные",
    timezone: "GMT2",
    contacts: {
      link: [
        "https://www.ao.com/",
        "https://www.aokjkjh.com/",
        "https://www.aokjkjh.com/",
      ],
      email: ["eleonora_1985@example.com", "eleohjjkgnora_1985@example.com"],
      phone: ["+7 (691) 654-2862", "+7 (691) 654-8962"],
    },
  },
  {
    id: 404,
    first_name: "404",
    last_name: "Некруреукеркуеасова",
    photo:
      "https://avatars.mds.yandex.net/i?id=2f942270d036dd442f20f4d10aa7504279b0cbbb-4577690-images-thumbs&n=13",
    position: "Дев-лид-2",
    grade: "C",
    level: 3,
    teamId: 304,
    departmentId: 204,
    boss: 402,
    town: "Москва",
    employment_type: "Аутсорс",
    timezone: "GMT2",
    contacts: {
      link: [
        "https://www.ao.com/",
        "https://www.aokjkjh.com/",
        "https://www.aokjkjh.com/",
      ],
      email: ["eleonora_1985@example.com", "eleohjjkgnora_1985@example.com"],
      phone: ["+7 (691) 654-2862", "+7 (691) 654-8962"],
    },
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
    departmentId: 205,
    boss: 403,
    town: "Москва",
    employment_type: "Аутсорс",
    timezone: "GMT3",
    contacts: {
      link: [
        "https://www.ao.com/",
        "https://www.aokjkjh.com/",
        "https://www.aokjkjh.com/",
      ],
      email: ["eleonora_1985@example.com", "eleohjjkgnora_1985@example.com"],
      phone: ["+7 (691) 654-2862", "+7 (691) 654-8962"],
    },
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
    departmentId: 206,
    boss: 403,
    town: "Москва",
    employment_type: "Штатные",
    timezone: "GMT3",
    contacts: {
      link: [
        "https://www.ao.com/",
        "https://www.aokjkjh.com/",
        "https://www.aokjkjh.com/",
      ],
      email: ["eleonora_1985@example.com", "eleohjjkgnora_1985@example.com"],
      phone: ["+7 (691) 654-2862", "+7 (691) 654-8962"],
    },
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
    departmentId: 207,
    boss: 404,
    town: "Москва",
    employment_type: "Аутсорс",
    timezone: "GMT3",
    contacts: {
      link: [
        "https://www.ao.com/",
        "https://www.aokjkjh.com/",
        "https://www.aokjkjh.com/",
      ],
      email: ["eleonora_1985@example.com", "eleohjjkgnora_1985@example.com"],
      phone: ["+7 (691) 654-2862", "+7 (691) 654-8962"],
    },
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
    departmentId: 202,
    boss: 404,
    town: "Москва",
    employment_type: "Штатные",
    timezone: "GMT5",
    contacts: {
      link: [
        "https://www.ao.com/",
        "https://www.aokjkjh.com/",
        "https://www.aokjkjh.com/",
      ],
      email: ["eleonora_1985@example.com", "eleohjjkgnora_1985@example.com"],
      phone: ["+7 (691) 654-2862", "+7 (691) 654-8962"],
    },
  },
];

export const userStructure = {
  id: 2,
  first_name: "Елена",
  last_name: "Тестовая",
  photo: "http://127.0.0.1:8000/media/user_photos/16768_original_5aOkyUy.jpg",
  position: "Разработчик",
  level: 4,
  grade: "Junior+",
  bossId: 1,
  teamId: 1,
  componentId: 1,
  employment_type: "Аутсорс",
  timezone: "Poland",
  town: "Москва",
  foreign_languages: ["Японский", "Английский"],
  programs: ["Python", "C++"],
  skills: ["Мобильная разработка", "Бекенд-разработка"],
  contacts: {
    links: [
      "https://telegram.org",
      "https://myteam.mail.ru/webim",
      "https://www.atlassian.com/ru/software/jira",
    ],
    emails: ["test@test.ru", "test2@test.ru"],
    phones: ["1111111111", "22222222222"],
  },
};


