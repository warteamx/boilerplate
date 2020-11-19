/* eslint-disable no-unused-vars */


// - Creamos una función mas genérica para conseguir el precio de los Servicios. "getPrice"

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

//- Creamos las clase "Service" con la funcion de conseguir el precio específico de cada 'servico' y las fees adicionales. 
// - Ahora ademas de Streaming y Download podríamos añadir nuevos servicios

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


// Creamos una clase MultimediaContent que nos dará las fees adicionales de cada Servicio.
// Si el servicio es normal, las fees son 0, y si son Premium

class MultimediaContent extends Service{

    getFees() {
        return 0 // No fees by default, if multimedia is premim, we override this function. 
    }
}

class Premium extends MultimediaContent {
    
    getFees() {
        return this.additionalFee
    }
}




