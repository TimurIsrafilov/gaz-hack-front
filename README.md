# Web app of the company and teams structure

## Project description:

A web application - for information obtaining about employees, their positions, teams, departments and projects. The main goal of the project is to provide a convenient and effective way to track and manage company resources.

## The app is deployed at GitHub Pages by the following link:

[https://timurisrafilov.github.io/gaz-hack-front/](https://timurisrafilov.github.io/gaz-hack-front/)

## Video tutorial about app and main functionality:

[https://disk.yandex.ru/i/g2ijcdTieqADCA](https://disk.yandex.ru/i/g2ijcdTieqADCA)

## Build commands:

clone repository
```bash
git clone https://github.com/TimurIsrafilov/gaz-hack-front.git
```

go to project folder
```bash
cd gaz-hack-front
```

install dependencies
```bash
npm i
```

## Команды для запуска проекта:

run dev mode
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

run prod mode
```bash
npm run build
```

## Stack of technologies used:

- <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="reactjs" alt="reactjs" width="20" height="20"/> - **ReactJS** - JavaScript library [https://react.dev/](https://react.dev/)
- <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="redux" alt="redux" width="20" height="20"/> - **Redux** - state manager for ReactJS [https://redux.js.org/](https://redux.js.org/)

## Links to libraries, icons:

- **Ant Design** - user interface system,  [https://ant.design/](https://ant.design/) - used forms, inputs, checkboxes, drop-down menu, buttons, icons, preloader, font visualization tags

- **React Flow** - graphical system [https://reactflow.dev/](https://reactflow.dev/) - used for the graphic construction of the pages "company structure" and "organizational chart"

- **Dagre D3** - graphical system [https://github.com/dagrejs/dagre-d3/](https://github.com/dagrejs/dagre-d3/) - used as an add-on for React Flow to automatically build graphical elements of diagrams

## Implemented functionality:
- project is tied to information about employees and projects in the company received from the backend
- start page - the user page
- search functionality by employee first and last name
- filter functionality for quick search of employees
- staffing structure in the company in a graphical representation of employee cards with corresponding links
- the structure of company projects in a graphical representation, there is the ability to add new users
- Preliminary work on the team page

## What can be improved:
- ability to update team compositions when dragging employees, link to the backend
- implement a page for editing employee data
- add authorization functionality

## Developers team:

Timur Israfilov
[![Telegram Badge](https://img.shields.io/badge/-timurisrafilov-blue?style=flat&logo=Telegram&logoColor=white)](https://t.me/timooooon11)
