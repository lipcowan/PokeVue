# poke-vue

## TapOnIt Technical Eval

_Create a web app that displays a list of products and their associated views. The app should have a main page that lists all products and a single-page view for each individual product. The single-page view should allow users to “like” a product._

## The app should have the following ​three​ main components:

### 1 - Database​ to store product information and “likes” in a single table.
- [x] A SQL RDBMS is preferred - SQL Server, MySQL, SQLite, etc.
- [x] The schema should include a title, description, product image (e.g. URL), price, and number of likes.(species, about, photo, price, likes)
- [x] Populate the table with a minimum of 10 example items. Include a SQL script to create the database/table as well as populate it with the example items.

### 2 - Backend API ​that supports CRUD interactions.
- [x] The API should support GET requests for product list and single-page views.
- [ ] It should also support PUT/POST/PATCH requests for adding likes. *STILL WORKING ON LIKES*
- [ ] OPTIONAL: Likes can also be removed with another POST/PATCH or DELETE request.

### 3 - Client ​written in a modern frontend JavaScript framework
_Framework should ideally be Vue, but React and Angular are acceptable._ 
#### Required views:
- [x] Main Page View:​ a scrollable page that lists all available products. Each item should display with the product image, item title, and price.
- [ ] OPTIONAL: Implement infinite scroll or pagination.

- [x] Single-page View:​ a page with complete details for a single product.
_Include product image, title, description, price and number of “likes”. A button should also be placed on the page to increment “likes” by one for each individual user._
- [ ] OPTIONAL: Add a back button or breadcrumbs to return back to the main page view.
- [ ] OPTIONAL: Add a button to remove a “like”, i.e. if a user likes a product, but decides to remove that like, allow them to press an “unlike” button. Or to press the same button again to “unlike”
