**Proyecto Videoclub API**

**Proyecto realizado para GeeksHubs Academy, en el que se solicita realizar la API de un videoclub con reparto de peliculas a domicilio. **


**Technolgogias utilizadas**

# Express API Mongoose + MongoDB

<br>

![image](https://user-images.githubusercontent.com/16636086/138952802-f9f8bd82-62d5-4a24-9679-09744b41c92d.png)

## CONFIG

```
npm init
npm install
npm update
npm run dev
npm run start

npm install express mongoose 

#### Mongo DB server
show dbs
use peliculas_db
db.createCollection('users')
db.createCollection('peliculas')
db.createCollection('pedidos')



```

## END-POINTS 
```
---------------------------------------- USERS ----------------------------------------

#### USERS
GET - localhost:3000
POST create user - localhost:3000/api/signup
POST login user - localhost:3000/api/signin
GET find user - localhost:3000/api/"ID"
DEL delete user - localhost:3000/api/"ID"


---------------------------------------- PELICULAS ----------------------------------------
GET create pelicula - localhost:3000/pelicula
GET  get all pelicula - localhost:3000/pelicula 
GET getById pelicula - localhost:3000/"ID"
GET getByTitulo pelicula - localhost:3000/pelicula/titulo/Four Minutes (Vier Minuten) (titulo de pelicula es un ejemplo)
GET getByGenero pelicula - localhost:3000/pelicula/genero/drama (drama es un ejemplo)
GET getbyActor pelicula - localhost:3000/pelicula/actor/Blanchette (Blanchette es un ejemplo)

---------------------------------------- PEDIDOS ----------------------------------------
POST create pedido - localhost:3000/pedido
GET getAll pedido - localhost:3000/pedido

```


En Heroku a traves de github -> https://reto-api.herokuapp.com/
