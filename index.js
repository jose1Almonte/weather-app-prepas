// // Constantes
// const numero = 123

// // Variables
// let nombre = "Nico"
// //Otra forma de variables es: var apellido = "Leal"

// // Datos nativos de Javascripts
// // Int
// // BigInt
// // String
// // Boolean
// // Object
// // Null
// // Undefined


// //Concatenar valores

// let saludo = `Hola ${nombre}. ¿Cómo estás?`

// //Booleanos
// const isValid = true
// const isnotValid = false

// //Object (en realidad es un diccionario)
// const person = {
//     name: 'Nico',
//     lastName: 'Leal',
//     age: 24,
//     isValid: true,
//     saludar: function () {
//         alert("Hola mundo");
//     },
//     tools:[
//         'React', 'Javascript', 'CSS', 123, true, false
//     ],
    
// };
// //Se accede al Object, ejemplo
// // person.name
// // person.saludar()


// const age = null;


// // Funciones en javascript
// function saludar(){
//     alert('Hola mundo')
// }

// // saludar()

// // Funciones flecha
// const despedirse = () => {
//     alert('Chao mundo')
// }

// // despedirse()

// // Esto es para poner en consola algo, por ejemplo, un objeto
// // console.log(person)
// // console.error(person)
// // console.table(person)

// // -----------------------------------------

const titleElement = document.getElementById("mainTitle")

// // Esta función se ejecuta luego de 2 segundos (2000 mili segundos)
// setTimeout(() => {
//     titleElement.textContent = "Hola que tal"
//     titleElement.style = 'background-color: red;'
// }, 2000)

// console.log(titleElement)

const inputElement = document.getElementById("mainInput")
const buttonElement = document.getElementById("searchButton")
const resultsContainerElement = document.getElementById("results")

const API_ID = 'da1fe86fc61cfa5d1be2b0d52251f9d6'

function printResults(data) {
    
        //Obtendremos las secciones que nos interesan
        const {main, sys, wind, name} = data
        const{humidity, pressure, temp} = main
        const{country} = sys
        const{speed} = wind

        resultsContainerElement.innerHTML = `
        <section class="results-box">
    
            <div class="result-item">

                <p class="title">City</p>
                <p class="value">${name}, ${country}</p> 

            </div>

            <div class="result-item">

                <p class="title">Humedad</p>
                <p class="value">${humidity}</p>  

            </div>

            <div class="result-item">

                <p class="title">Temperatura</p>
                <p class="value">${temp} Kelvin</p>

            </div>
            
            <div class="result-item">

                <p class="title">Presure</p>
                <p class="value">${pressure}</p>

            </div>
            
            <div class="result-item">

                <p class="title">Wind Speed</p>
                <p class="value">${speed}</p>

            </div>


        </section>
        `

        console.log(humidity, pressure, temp, country)

        //Aquí debugueé viendo si me devolvía en consola el valor de la humedad
        // console.log(data.main.humidity)
        // console.log(data)
}


// Promesa OPCIÓN 1

// buttonElement.addEventListener('click', () => {
    
//     const{value} = inputElement
//     // Otra forma 
//     // const value = inputElement.value

//     // Aquí tenemos una "promesa", sirve para obtener API's y para operaciones en segundo plano
//     const response = fetch(
//         `https://api.openweathermap.org/data/2.5/weather?appid=${API_ID}&q=${value}`
//     ).then((response) => {
//         // Pasaremos ahora la data a formato JSON
//         return response.json()
//         // Ahora, buscaremos la data que nosotros queremos
//     }).then((data) => {
//         //Corre la función printResults
//         printResults(data)

//     }).catch((err)=>{
//         console.log(err)
//     })

//     console.log(response)
// })


// Promesa OPCIÓN 2
try {
    buttonElement.addEventListener('click', async() => {
    
        const{value} = inputElement
    
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?appid=${API_ID}&q=${value}`
        )
        const data = await response.json()
        printResults(data)
    })

} catch (error) {
    console.log(error)
}
