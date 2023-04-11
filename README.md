# INSTAG
Instag es una aplicación para subida de fotos y ver fotos de otros usuarios. Se ha desarrollado bajo el stack MERN. La aplicación es mobile first y se puede encontrar desplegada en el siguiente enlace: https://instag-client.vercel.app/

## Probar el proyecto
Si se quisiera probar el proyecto en local es importante instalar las dependencias con el siguiente comando

    $ npm install
    
además de cambiar la variable de entorno REACT_APP_API_URL con la url localhost del servidor. 

## ENDPOINTS
| URL path                    | Descripción |
| :--------------------------:|:-----------------:| 
| /                         | Home              |
| /login                         | Página de login     |
| /signup                         | Página de registro   |
| /upload                         | Página de publicación de post     |
| /explore                         | Página para explorar posts     |
| /profile                         | Página para ver tu perfil     |
| /details/:id                | Página para ver un post en concreto |
