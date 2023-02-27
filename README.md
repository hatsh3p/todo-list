# todo-list

This is a Todo List API created using Node.js, Express, and PostgreSQL.

Based on the PERN Stack Course tutorial:
https://www.youtube.com/watch?v=ldYcgPKEZC8

<br />

# To run: 
1. Run ```npm install``` to install dependencies.
- cors
- db
- express
- pg
- react-dom
- react
- create-react-app
2. Start postgres ```psql -U postgres``` and create database using server/database.sql.
3. Start server using ```node server/index.js``` or nodemon.
4. Start fontend client using ```npm start```.
5. Install and run Postman to simulate different requests.

<br />

# Project Specifications

## Backend
- [x] POST: Create a TodoList 
- [x] GET: Get all of the TodoLists
- [x] POST: Create a TodoItem for a specific list 
- [x] GET: Get all the TodoItem's in the TodoList
- [x] PUT:    Update a TodoItem and mark it as done
- [x] DELETE: Delete a TodoListItem 
- [x] DELETE: Delete a TodoList 

## Frontend
- Create UI components that allow the user to accomplish the same tasks as the
backend.
- [x] POST: Create a TodoList 
- [x] GET: Get all of the TodoLists
- [x] POST: Create a TodoItem for a specific list 
- [ ] GET: Get all the TodoItem's in the TodoList
- [x] PUT:    Update a TodoItem and mark it as done
- [ ] PUT: Update a TodoItem description. (in-progress: Had issues with resetting
modal state after it was closed)
- [x] DELETE: Delete a TodoListItem 
- [x] DELETE: Delete a TodoList 

<br />

# What I would do differently
- Include more explanatory comments based on the tutorial in the tutorial-based branch of this repository.
- Update the comments in the multiple-lists branch of this repository to reflect the changes made.
- Write a more detailed version of the ```to run``` instructions in this README listing all of the npm modules needed and explaining how to set up the database.
- Make the port numbers variables for both the frontend and backend.

## Backend
- Learn more about HTTP URL structure and update accordingly.

## Frontend
- Change the "Add Item" second bar where the user inputs a list id into a 
dropdown with all of the list names.
- Add a feature to click the list name and open a modal displaying all of the items 
in that list.
- Change the "Items" table so that the status is a checkbox that can be checked 
or unchecked.
- Add page navigation and reorganize so that user can navigate to one page for 
each list and view the items for that list only.
