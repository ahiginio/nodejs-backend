## Endpoints
A continuacion la lista de endpoints con sus respectivas maneras de enviar la data, 
en todos debe enviar el token de auth BEARER menos en el register o login

### Register
-Method: POST 
-endpoint: /api/register

```
  email: prueba@prueba.com,
  username: prueba,
  password: 123456,
  passwordCheck: 123456,
  firstName: Prueba,
  lastName: Prueba,
  age: 27,
  phone: 112193803,
  role: admin
```
### Login
-Method: POST 
-endpoint: /api/login

```
  email: prueba@prueba.com,
  password: password,
```
### Create Cart
Una vez logeado debe crear el cart del usuario para poder agregar productos
-Method: POST 
-endpoint: /api/cart/:userId

### Add products to Cart
Una vez logeado debe crear el cart del usuario para poder agregar productos
-Method: PUT 
-endpoint: api/cart/:cartID/productos

```
product_id: product._id,
qty: 1,
```
### Delete product from cart
Para borrar el cart
-Method: DELETE 
-endpoint: api/cart/:cartID/productos/:productID

### List products from cart
Listar productos del cart
-Method: GET 
-endpoint: api/cart/:cartID/productos/

### Clear Cart
Para borrar el cart
-Method: DELETE 
-endpoint: api/cart/:carID/clear

### List products
Listar productos 
-Method: GET 
-endpoint: api/products

### List product by ID
Listar producto por ID
-Method: GET 
-endpoint: api/product/:productID

### List product by Category
Listar productos por categorias
-Method: GET 
-endpoint: api/products/category/:catID

### Server Config
Muestra la configuracion del servidor
-Method: GET 
-endpoint: api/cart/:carID/clear







