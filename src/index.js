const express  = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig.js');
const CityRepository = require('./repository/city-reposiotry.js');
const ApiRoutes = require('./routes/index.js');
const {City, Airport} = require('./models/index');
const { Airplane } = require('./models/index');
const  db  = require('./models/index');



const SetupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/api' , ApiRoutes);

    app.listen(process.env.PORT , async () => {
        console.log(`server started at ${PORT}`);
        //const repo = new CityRepository();
        // repo.deleteCity({cityid : 4});
        // const airport = await Airport.findAll();
        // const data = await City.findAll({
        //     where  : {
        //         id : 3
        //     },
        //     include: [
        //         {
        //             model: Airport
        //         }
        //     ]
        // });
        // console.log(data);

        //creating new airport
        // const newAirport = await Airport.create({
        //     name : "Jabalpur International Airport",
        //     cityId : 4
        // })
         
        //db.sequelize.sync() used for synchronizing
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter : true});
        // }
        // db.sequelize.sync({alter : true});

        // const city = await City.findOne({
        //     where : {
        //         id : 9
        //     }
        // });
        // const airports = await city.getAirports();
        // console.log(city,airports);

        

        

    });
}

SetupAndStartServer();