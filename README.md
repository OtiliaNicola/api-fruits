## 🥭​🍍​🍌​🥥​🥝​🍓 ​**API TROPICAL FRUITS** 🥭​🍍​🍌​🥥​🥝​🍓 ##

<p align="center" width="100%">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5OaAviY9ld1c7MEAUL7lqsBmxEQmScsR0g&s" alt="FrutasTropicales">
</p>

Manages information on tropical fruits and countries of origin. Provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on different resources related to fruits.

## **Installation** ⚙️ ##

To use this API, you must first clone the repository from GitHub:

    git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-OtiliaNicola.git

Install all necessary dependencies with:

    npm install
    
Then, create an ‘.env’ file by copying the parameters from ‘.env_example’ with your data.

## **Use** ⚙️​ ##

Once you have installed the dependencies, you can start the server by running the following command:

    npm run dev
   
The server will be running at http://localhost:3000 (or the port you specified in the .env file). You can use Postman to make HTTP requests to the endpoints provided by the API.

## **Endpoints**​ 🔎​ ##

- GET /fruits: Gets the list of tropical fruits.
- GET /fruits/:id: Gets the details of a specific record.
- POST /fruits: Creates a new record about the fruit you like the most.
- PUT /fruits/:id: Update the details of an existing record.
- DELETE /fruits/:id: Delete /fruits/:id: Deletes a record.
