## **API FRUTAS TROPICALES** ##
<div>
<p style = 'text-align:center;'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5OaAviY9ld1c7MEAUL7lqsBmxEQmScsR0g&s" alt="FrutasTropicales" width="300px">
</p>
</div>

Gestiona información sobre frutas tropicales y países de origen. Proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre diferentes recursos relacionados con las frutas.

## **Instalación** ##

Para utilizar esta API, primero debes clonar el repositorio desde GitHub:

    git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-OtiliaNicola.git

Instalar todas las dependencias necesarias con:

    npm install
Luego, crea un archivo ".env" copiando los parametros de ".env_example" con tus datos.

## **Uso** ##

Una vez que hayas instalado las dependencias, puedes iniciar el servidor ejecutando el siguiente comando:

    npm run dev
El servidor estará en funcionamiento en http://localhost:3000 (o el puerto que hayas indicado en el archivo .env). Puedes usar Postman para realizar solicitudes HTTP a los endpoints proporcionados por la API.

## **Endpoints** ##

La API proporciona los siguientes endpoints:

- GET /fruits: Obtiene la lista de frutas tropicales.
- GET /fruits/:id: Obtiene los detalles de un registro específico.
- POST /fruits: Crea un nuevo registro sobre la fruta que más te guste.
- PUT /fruits/:id: Actualiza los detalles de un registro existente.
- DELETE /fruits/:id: Elimina una fruta.
