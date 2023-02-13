# todo-list

This is a Todo List API created using Node.js, Express, and PostgreSQL.

Based on the PERN Stack Course tutorial:
https://www.youtube.com/watch?v=ldYcgPKEZC8

## To run:
1. Run ```npm install``` to install dependencies.
2. Launch postgres and create table using database.sql.
3. Update db.js:
```
const pool = new Pool({
    user: "postgres", <-- Update with your username if not postgres.
    password: "***********" <-- Update with your password
    host: "localhost",
    port: 5432,
    database: "todo_tutorial"
});
```
2. Start server using ```node server/index.js```.
3. Go to ```http://localhost:3000/``` to view the app.
