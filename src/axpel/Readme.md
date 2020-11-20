# Ejercio 1

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

- Creamos las clase "Service" con la funcion de conseguir el precio específico de cada 'servico' y las fees adicionales. 
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
- Si el servicio es normal, las fees son 0, y si son Premium 

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
