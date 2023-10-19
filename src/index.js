const express  = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig.js');
const { City } = require('./models/index.js');
const CityRepository = require('./repository/city-reposiotry.js');

const SetupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT , async () => {
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        // repo.deleteCity({cityid : 4});

        repo.createCity({name : "Uttar Pradesh"});
    });
}

SetupAndStartServer();