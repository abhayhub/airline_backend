const { CityRepository } = require('../repository/index.js');

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city  = await this.cityRepository.createCity(data);
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteCity(){
        try {
            const response = await this.cityRepository.deleteCity(cityid);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(){
        try {
            const city = await this.updateCity(cityid, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getCity(){
        try {
            const city  = await this.cityRepository.getCity(cityid);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService;