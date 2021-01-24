# Name-app
A name listing app displaying names and their amounts in a .json file.

Front end code is under the 'src' folder. Back end server is in the root.

Initially the names are sorted by popularity. The buttons in the name table header can be used to sort them alphabetically or by amount,
ascending or descending.

Type in the search field to filter names. Use the tickbox to toggle exact search.

## Main technologies
Front end is made with **React**. **Axios** is used to fetch data from the back end **Express/Node** server, which currently gets the name data from a local .json file.

Front end is styled with **react-boostrap** and some inline styling.

End-to-end testing is done with **Cypress**.

## API
The back end also provides an API:

`GET /api/names` gets all the names (not sorted)

example of returned data:
```
[
  {
    "name": "Ville",
     "amount": 24
  },
  {
     "name": "Anna",
     "amount": 6
  },
  ...
]
```

`GET /api/names/getTotal` gets the total amount of all names (an integer)

`GET /api/names/{name}` gets data of a given name

example: `GET /api/names/ville` gets:

```
{
  "name": "Ville",
  "amount": 24
}

```
## Deployment
Clone the repository

run `npm install`

### For development, run:

`npm run server`

`npm run dev`

### For a production build:

`npm run build`

`npm start`

### For testing with Cypress:

`npm run server:test`

`npm run dev`

`npm run cypress:open` or `npm run test:e2e`

## Possible improvements

1. Move data to a database.

2. Error handling.

3. Sorting re-done every time when name filter is changed. Could let Name component to filter itself instead.

4. Unit testing.