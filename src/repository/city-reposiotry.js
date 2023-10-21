const { City } = require('../models/index.js');
const {Op} = require('sequelize');
class CityRepository {

    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityid){
        try {
            await City.destroy({
                where : {
                    id: cityid
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityid, data) {
        try {
            const city = await City.update(data , {
                where : {
                    id : cityid
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityid) {
        try {
            const city = await City.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities(filter){ //filter can be empty also
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name 
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;

