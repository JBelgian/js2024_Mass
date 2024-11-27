// taxi class definition
class Taxi {
    #farePerKm
    constructor(make, model, client) {
        this.make = make; // Make of the taxi
        this.model = model; // Model of the taxi
        this.totalDistance = 0; // Total distance traveled in KM
        this.#farePerKm = 2.6;
        this.fare = 0;
        this.startFee = 3.5;
        this.client = client;
    }

    setFarePerKm (value) {
        if (value < 5) {
            console.log('No this is not enough... we will not survive with these fees');
            return
        } else {
            this.#farePerKm = value;
        }
    }

    // Method to start a new fare
    startFare() {
        this.totalDistance = 0;
        this.fare = 0;
        console.log(`Trip started in ${this.model} / ${this.make}`)
    }

    // Method to add distance traveled
    addDistance(distance) {
        if (distance < 0) {
            console.log('Distance cannot be negative');
            return // exit the method and stop the rest of the execution
        }
        this.totalDistance += distance;
        console.log (`Added ${distance} km. Total distance: ${this.totalDistance} km.`);
    }

    // Method to calculate the total fare
    calculateTotalFare () {
        this.fare = this.fare + this.startFee;
        this.fare += this.#farePerKm * this.totalDistance;
        console.log(`Total fare for ${this.totalDistance} km. is ${this.fare.toFixed(2)} EUR`);
        return this.fare;
    }

    endTrip() {
        console.log(`Trip ended! Thank you come again. Total fare: ${this.fare.toFixed(2)}`)
        // send email to thank the client... for example/plausible routine
    }
}

class Client {
    constructor (name,phone,email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

// Create a new Taxi object
const myClient = new Client('Massimo','0000000');
const myTaxi = new Taxi('Toyota', 'Corolla', myClient);

console.log(myClient);

// start a new fare
myTaxi.startFare();

// Add distance traveled
myTaxi.addDistance(12);
myTaxi.addDistance(60);

// Calculate and display total fare
myTaxi.calculateTotalFare();

// End the trip and reset
myTaxi.endTrip();

// PUBLIC: ACCESSIBLE FROM OBJECT INSTANTIATION (myTaxi)
// PRIVATE: ONLY ACCESSIBLE FROM WITHIN THE CLASS

// WAT IS HET PROBLEEM? (WE MAKKE?)

myTaxi.setFarePerKm(6); // this not possible, cuz the propertie is private (and can only be set with a setter)
myTaxi.calculateTotalFare();