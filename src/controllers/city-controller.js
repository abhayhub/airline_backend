const { CityService } = require('../services/index.js');

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city  = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city",
            err : {} 
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        })
    }
}

const destroy = async (req,res) => {

    try {
        const res  = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : res,
            success : true,
            message : "Successfully deleted a city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : flase,
            message : "Not able to delete the city",
            err : error
        })
    }
    
}

//Pathc -> /city/:id
const update = async (req,res) => {
    try {
        const res  = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : res,
            success : true,
            message : "Successfully updated a city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : flase,
            message : "Not able to update a city",
            err : error
        })
    }
}

//Get -> /city/:id
const get = async (req,res) => {
    try {
        const res  = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data : res,
            success : true,
            message : "Successfully fetched a city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : flase,
            message : "Not able to fetched a city",
            err : error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}