## Inicializacion de proyecto
Debera correr el comando de install de npm en el root del proyecto y tambien en la carpeta client para poder levantar el frontend
```
npm i  
cd client && npm i 

```
## Variables de entorno
Debera crear un .env en el root del servidor con las siguientes variables de entorno
```
MONGO_DB_URI_DEV
MONGO_DB_URI
JWT_SECRET
TOKEN_EXPIRES_IN=
WHITELISTED_DOMAINS
SKIP_PREFLIGHT_CHECK=true
API_URL= http://localhost:8080/api/
PORT=8080
ADMIN_EMAIL:
```

## Endpoints
A continuacion la lista de endpoints con sus respectivas maneras de enviar la data, 
en todos debe enviar el token de auth BEARER menos en el register o login

### Register
- Method: POST 
- endpoint: /api/register

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
- Method: POST 
- endpoint: /api/login

```
  email: prueba@prueba.com,
  password: password,
```
### Create Cart
Una vez logeado debe crear el cart del usuario para poder agregar productos
- Method: POST 
- endpoint: /api/cart/:userId

### Add products to Cart
Una vez logeado debe crear el cart del usuario para poder agregar productos
- Method: PUT 
- endpoint: api/cart/:cartID/productos

```
product_id: product._id,
qty: 1,
```
### Delete product from cart
Para borrar el cart
- Method: DELETE 
- endpoint: api/cart/:cartID/productos/:productID

### List products from cart
Listar productos del cart
- Method: GET 
- endpoint: api/cart/:cartID/productos/

### Clear Cart
Para borrar el cart
- Method: DELETE 
- endpoint: api/cart/:carID/clear

### List products
Listar productos 
- Method: GET 
- endpoint: api/products

### List product by ID
Listar producto por ID
- Method: GET 
- endpoint: api/product/:productID

### List product by Category
Listar productos por categorias
- Method: GET 
- endpoint: api/products/category/:catID

### Create Order
Crea una orden de compra
- Method: POST
- endpoint: api/order
```
  items: [
    {
      "title": "Monitor LG 20 20MK400H-B VGA HDMI",
      "price": 23900,
      "qty": 1,
      "description": "Descripcion del producto"
    },
    {
      "title": "Monitor Samsung 24'' Curvo F390",
      "price": 27900,
      "qty": 1,
      "description": "Descripcion del producto"
    }
  ],
  status: "generated",
  email: prueba@prueba.com,
  address: Calle falsa 123,
```
### List Orders
Listar ordenes de compra
- Method: GET
- endpoint: api/orders

### Server Config
Muestra la configuracion del servidor
- Method: GET 
- endpoint: api/cart/:carID/clear







