const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');


class FlightService {

    constructor(){
        this.airplaneRepositor = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error : 'Arrival Time canot be less than departure'}
            }
            const airplane = await this.airplaneRepositor.getAirplane(data.airplaneId);
            const flight  = await this.flightRepository.createFlight({
            ...data ,
            totalSeats : airplane.capacity
        });
        return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getFlightData(data){
        try {
            const flightdata = await this.flightRepository.getAllFlight(data);
            return flightdata;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;