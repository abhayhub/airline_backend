const express  = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig.js');
const { City } = require('./models/index.js');
const CityRepository = require('./repository/city-reposiotry.js');
const ApiRoutes = require('./routes/index.js');


const SetupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/api' , ApiRoutes);

    app.listen(process.env.PORT , async () => {
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        // repo.deleteCity({cityid : 4});
    });
}

SetupAndStartServer();