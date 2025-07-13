# Implementation Notes

## Environment
If you want to just preview the application without bothering with the setup, you can use the following link:
[Preview the application](https://full-stack-homework.vercel.app)

## Start the application
1. Make sure to follow .env.example and create a .env file with the necessary environment variables.
2. Install dependencies:
```bash
pnpm i
```
3. Init the database and seed it with initial data:
```bash
pnpm db:init && pnpm db:seed
```
4. Start the application:
```bash
pnpm dev
```

## Testing
### Unit tests
I implemented unit tests for the core functionality of the application, or what I thought was critical enough to be tested.
You can run the tests using the following command:
```bash
pnpm test
```

## Database
### Database Schema
The database schema can be found in `src/db/schema.sql`. It's a raw SQL file that defines the structure of the database.

### Scripts
For this project I decided to use my own scripts as mechanism for database initialization and seeding. The scripts are located in the `scripts` directory, that utilize sql scripts from `src/db` directory.

## Assumptions & implementation notes
1. The project structure follows a domain-driven design approach, with clear separation of concerns. Even though this is super small project, I wanted to showcase how I would structure a larger application.
2. For the grades page, I assumed that I just need to handle insertions only, but added a simple list of all the grades in the database, since it made more sense to have it.
3. For reading the numbers from the database, I used the window function LEAD which is supported by PostgreSQL. This allows us to get the next value in the sequence without having to do a self-join.
To optimize reading the numbers, I also created an index on the `value` column of the `numbers` table. This allows for faster lookups when reading the numbers.

- Further optimizations could be made by implementing server-side pagination, but for the sake of simplicity I decided to keep it as is.
Also MUI DataGrid supports sorting and filtering out of the box on the client side, which is kinda nice, so implementing server-side filtering and sorting on top of server-side pagination would be a bit overkill for this project.

