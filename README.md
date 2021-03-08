## Getting started

### Prerequisites

In order to install and run this project locally, you would need to have the following installed on you local machine.

- [**Node JS**](https://nodejs.org/en/)
- [**Express**](https://expressjs.com/)
- [**MySQL**](https://www.mysql.com/downloads/)
- [**Docker Engine**](https://www.docker.com/)

## Manual Installation

- Clone this repository

- Navigate to the project directory

- Run `npm install` to instal the projects dependencies

- Create a MySQL database and run the `sql` file in the database directory to migrate the database

```sh
mysql -u <dbuser> -D <databasename> -p < ./src/database/database.sql
```

```sh
Change the database credentials on .env
```

- Run `npm run start` to start the app

## Docker

- Create a MySQL database and run the `sql` file in the database directory to migrate the database

```sh
mysql -u <dbuser> -D <databasename> -p < ./src/database/database.sql
```

```sh
Change the database credentials on .env
```

- Build image
`docker-compose build`

- Run container
`docker-compose up -d`
