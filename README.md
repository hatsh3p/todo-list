# todo-list

This is a Todo List API created using Node.js, Express, and PostgreSQL.

Based on the PERN Stack Course tutorial:
https://www.youtube.com/watch?v=ldYcgPKEZC8

<br />

# To run: 
TODO: Update these steps. 

1. Run ```npm install``` to install dependencies.
2. Start postgres. 
2. Start server using ```node server/index.js```.
3. Go to ```http://localhost:3000/``` to view the app.

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
- [ ] GET: Get all of the TodoLists
- [x] POST: Create a TodoItem for a specific list 
- [ ] GET: Get all the TodoItem's in the TodoList
- [ ] PUT:    Update a TodoItem and mark it as done
- [x] DELETE: Delete a TodoListItem 
- [x] DELETE: Delete a TodoList 

<br />

# What I would do differently

## Backend
- Learn more about HTTP URL structure and update accordingly.

## Frontend
- Change the "Add Item" second bar where the user inputs a list id into a 
dropdown with all of the list names.
- Add page navigation and reorganize so that user can navigate to one page for 
each list and view the items for that list only.
- Change the "Items" table so that the status is a checkbox that can be checked 
or unchecked.
