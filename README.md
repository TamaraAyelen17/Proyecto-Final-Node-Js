# Proyecto Final - Tamara Sorsaburu

Plantilla de servidor con arquitectura en capas utilizando **Node.js**, **Express** y **Firebase**.

---

## 🧪 Tecnologías y dependencias

Este proyecto utiliza las siguientes dependencias:

| Paquete              | Versión  | Descripción                                                                      |
|----------------------|----------|----------------------------------------------------------------------------------|
| express              | ^5.1.0   | Framework web para Node.js.                                                     |
| body-parser          | ^2.2.0   | Middleware para procesar datos JSON y urlencoded en peticiones HTTP.           |
| cors                 | ^2.8.5   | Middleware para habilitar CORS (intercambio entre orígenes).                   |
| dotenv               | ^17.2.0  | Carga variables de entorno desde un archivo `.env`.                             |
| firebase             | ^11.10.0 | SDK para conectarse con Firebase (Firestore, Auth, etc.).                      |
| jsonwebtoken         | ^9.0.2   | Generación y verificación de tokens JWT para autenticación.                    |
| express-validator    | ^7.2.1   | Validación de entradas HTTP con middlewares para Express.                      |

---


## 📜 Scripts disponibles

| Comando     | Descripción                           |
|------------|----------------------------------------|
| `npm start` | Inicia el servidor (`node index.js`)  |
| `npm test`  | Placeholder para tests (no definido)  |

---

## 🚀 Cómo ejecutar el proyecto

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/TamaraAyelen17/Proyecto-Final-Node-Js.git
   cd Proyecto-Final-Node-Js

2. Instalá las dependencias:

    ```bash
    npm install

3. Creá un archivo .env en la raíz con tus variables de entorno:
     ```bash
     FIREBASE_API_KEY= #tus claves de firebase
    FIREBASE_AUTH_DOMAIN= #tus claves de firebase
    PROJECTID= #tus claves de firebase
    FIREBASE_STORAGE_BUCKET= #tus claves de firebase
    MESSAGINGSENDERID= #tus claves de firebase
    FIREBASE_APP_ID= #tus claves de firebase
    PORT= 3000
    JWT_SECRET_KEY= #tu clave secreta jwt

4. Iniciá el servidor:
     ```bash
     npm run start

5. Accedé desde tu navegador o Postman a:
     ```bash
     http://localhost:3000
---

## 🧪 Endpoints de la API
## 📦 Productos

|Método | Ruta	| Descripción|
|-------|-------|------------|
|GET	  |/api/products	      |Obtener todos los productos|
|GET	  |/api/products/:id	  |Obtener un producto por ID|
|POST	  |/api/products/create	|Crear un nuevo producto|
|PUT	  |/api/products/:id	  |Actualizar un producto existente|
|DELETE	|/api/products/:id	  |Eliminar un producto por ID|

Ejemplo de creación de producto (POST /api/products/create):

    
      {
      "name": "Gaseosa Coca-Cola",
      "price": 850,
      }

---

## 🔐 Autenticación

|Método |	Ruta	| Descripción
|-------|-------|------------|
|POST	  |/auth/login	  |Iniciar sesión y obtener un token|

Ejemplo de login (POST /api/auth/login):

    
      {
        "email": "user@email.com",
        "password": "strongPass123"
      }
Respuesta

      {
        "message": "Login exitoso",
        "token": "eyJhbGciOiJIUzI1NiIsIn...",
        "user": {
            "id": 1,
            "email": "user@email.com"
        }
    }
---

## 🔒 Seguridad y autenticación

Algunas rutas requieren autenticación JWT. Para acceder, debés incluir el token en el header:

      Authorization: Bearer <tu_token>

---

## 👩‍💻 Autor

### Tamara Sorsaburu
Licencia: ISC

