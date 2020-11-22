Deployed: https://boilerplate-mern.ey.r.appspot.com/

# Ejercicio 1

PROBLEMA: 

- Disponemos ya de un análisis previo que podemos utilizar como punto de partida, pero que habrá que
corregir y mejorar. Se trata de un software para gestionar el streaming de películas en línea.

 1. Que problemas detectas en la operación y razona la respuesta
 2. Propón una solución alternativa (también en pseudocódigo del mismo
estilo) que corrija los problemas de la
operación getTotal de RegisteredUser que has detectado en la
pregunta anterior. Realiza todos los cambios que consideres necesarios
en cualquiera de las clases del modelo del enunciado.

RESPUESTA 1 : 

Se inclumple varios princicipos de SOLID

- (Single Responsibility) La clase Register User debería tener solo una funcion . El metodo de get Total debería definirse fuera. 
- (Open-closed ) En el futuro si incluimos nuevos servicios, tendríamos que modificar la función getTotal(), 

RESPUESTA 2: 

- Creamos una función mas genérica para conseguir el precio de los Servicios. "getPrice"
<pre><code>
class RegisteredUser {
    constructor(services = []) {
        this.services = services
    }

    getTotal() {
        let total = 0

        this.services.forEach((service, index) => {
            total = + service.getPrice()
        })

        return total
    }
}
</code></pre>

- Creamos las clase "Service" con la funcion de conseguir el precio específico de cada 'servicio' y las fees adicionales. 
- Ahora ademas de Streaming y Download podríamos añadir nuevos servicios

<pre><code>
class Service extends RegisteredUser {

     getPrice() {
         return this.getServicePrice() + this.getFees()
     }
}

class StreamingService extends Service {
    getServicePrice() {
        return this.streamingPrice()
    }
}

class DownloadingService extends Service {
    getServicePrice() {
        return this.downloadingPrice()
    }
}

</code></pre>

- Creamos una clase MultimediaContent que nos dará las fees adicionales de cada Servicio. 
- Si el servicio es normal, las fees son 0, y si son Premium se añade el aditional fee. 

<pre><code>
class MultimediaContent extends RegisteredUser {

    getFees() {
        return 0 // No fees by default, if multimedia is premim, we override this function. 
    }
}

class Premium extends MultimediaContent {
    
    getFees() {
        return this.additionalFee
    }
}

</code></pre>

# Ejercicio 2

NOTA: La app utiliza un código boilerplate de MERN stack con Typescript / MongoDB y otras tecnologías que no he utilizado para esta prueba, pero al tenerlo integrado en el CD/CI de google, lo he utilizado para agilizar mas el "setup" del ejercicio. 

Deployed: https://boilerplate-mern.ey.r.appspot.com/

## USER STORY
- usuario puede buscar lugares con un Searchbar
- Por cada lugar se añade un Maker al Mapa a través de redux

## Know issues
- PROBLEMA: Si el usuario elige un lugar que no aparece en el Autocomplete, la aplicacion se vuelve inestable. 
- SOLUCIÓN: Comprobar que el lugar elegido se corresponde con el propuesto por Automplete + Añadir Error Boundary + Añadir Mensaje que el lugar solucionado no existe. 
- Tuve problemas para realizar test en los componentes que utilizan el modulo de 'react-google-maps/api' ya que no estoy familiarizado con el. :( 
- He dejado al descubierto algunas variables .ENV para que podáis instalar la aplicación en local. La API de Google, MongoDB están al descubierto, y las dejaré así unos dias y después las revocaré. 

## Tech:
- Create React App 
- React Google Maps API
- Redux
- React Router Dom
- React Testing Library
- Node (Express)
- Google Cloud App Engine
- Google Cloud Build para CD/CD (Test, build y deploy) 

## Scripts
Se puede elegir entre utilizar NPM o DOCKER

NPM
- Para instalar la aplicación: npm install
- Para empezar: npm run startDEV

DOCKER:
- docker-compose up -d
- (con docker hace falta añadir una variable de enviroment .env MONGO_DRIVER=mongodb://mongodb:27017/api)

## OPTIMIZACIÓN 
- Para analizar el bundle size:
1) npm run build
2) npm run analyze

- Actualmente el tamaño es de 508.45KB
- - react-dom: 114.57KB
- - material-ui: 106.42KB


- He añadido React Profiler al Screen del ejercicio 2 para poder ver a traves los tiempos de carga... Pero no he tenido tiempo de analizarlo. //

- Para tener renders mas rápidos deberíamos hacer pruebas con React Memo, para comprobar si se puede mejorar. No tuve tiempo de analizar esta parte

- Para reducir costes de llamadas a la API de Google (desde el frontend ) podríamos antes de hacer la llamada, podríamos comprobar que si está almacenado en nuestro Redux store, y si está devolver el objeto almacenado y si no hacer la llamada. 
- Desde el backend podríamos tener un servicio de redis y cache... pero creo que eso ya está fuera de contexto para este ejercicio.  