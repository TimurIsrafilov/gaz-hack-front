# Проект организационной структуры компании

## Описание проекта:

Web-приложение для получения информации о сотрудниках, их должностях, командах, департаментах и проектах. Основная цель проекта — обеспечить удобный и эффективный способ отслеживания и управления ресурсами компании.

## Проект размещен на ресурсе GitHub Pages по ссылке:

[https://timurisrafilov.github.io/gaz-hack-front/](https://timurisrafilov.github.io/gaz-hack-front/)

## Видео туториал как пользоваться приложением и об осноывных его функциях:

[https://disk.yandex.ru/i/g2ijcdTieqADCA](https://disk.yandex.ru/i/g2ijcdTieqADCA)

## Команды для сборки проекта:

склонировать реппозиторий
```bash
git clone https://github.com/TimurIsrafilov/gaz-hack-front.git
```

зайти в папку проекта
```bash
cd gaz-hack-front
```

установить зависимости
```bash
npm i
```

## Команды для запуска проекта:

запустить дев-режим
```bash
npm start
```

Открыть [http://localhost:3000](http://localhost:3000)

запустить прод-режим
```bash
npm run build
```

## Использован стек технологий:

- <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="reactjs" alt="reactjs" width="20" height="20"/> - **ReactJS** - библиотека JavaScript [https://react.dev/](https://react.dev/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="redux" alt="redux" width="20" height="20"/> - **Redux** - стейт-менеджер для ReactJS [https://redux.js.org/](https://redux.js.org/)

## Ссылки на библиотеки, иконки и шрифты:

- **Ant Design** - система пользовательского интерфейса,  [https://ant.design/](https://ant.design/) - использованы формы, инпуты, чекбоксы, выпадающее меню, кнопки, иконки, прелоадер, таги визуализации шрифта

- **React Flow** - система графического интерфейса [https://reactflow.dev/](https://reactflow.dev/) - использована для графического построения страниц "структура компании" и "организационная диаграмма"

- **Dagre D3** - система графического построения [https://github.com/dagrejs/dagre-d3/](https://github.com/dagrejs/dagre-d3/) - использована в дополнение для React Flow для автоматического выстраивания графических элементов схем

## Реализованный функционал:
- Проект привязан к получаемой с бэкенда информации о сотрудниках и проектах в компании
- Ввиду сжатых сроков и неприоритетности этап аутентификации был пропущен
- Стартовая страница - страница пользователя, на которую он попадает после авторизации
- Реализован функционал поиска по имени и фамилии сотрудника
- Реализован функционал фильтров для быстрого поиска сотрудников
- Реализована штатная структура в компании в графическом представлении карточек сотрудников с соответствующими связями
- Реализована структура проектов компании в графическом представлении, присутствует возможность добавления новых пользователей
- Предварительно проработана страница команды

## Что можно улучшить:
- Графическое представление организационной диаграммы не соответствует макету
- Обеспечить возможность при перетаскивании сотрудников обновлять составы команд, связать с бэкендом
- Реализовать страницу редактирования данных сотрудников
- Добавить функционал авторизации

## Команда разработчиков:

Тимур Исрафилов
[![Telegram Badge](https://img.shields.io/badge/-timurisrafilov-blue?style=flat&logo=Telegram&logoColor=white)](https://t.me/timooooon11)