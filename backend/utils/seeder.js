
const Preach = require('../models/preach')
const dotenv = require('dotenv')

//Setting up config file
dotenv.config({path: 'backend/config/config.env'})

//Connection to database
const connectionDatabase = require('../config/database')
connectionDatabase();

// Get properties fixtures
const preachs = require('../data/preach.json')

const seedPreachs = async () => {
    try {
        console.log('%%%% Preachs Deleted Running %%%')
        await Preach.deleteMany();
        console.log('%%% All preachs deleted successful %%%')

        console.log('%%% Preachs Adding Running %%%')
        await Preach.insertMany(preachs)
        console.log('%%% All preachs Adding successful %%%')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedPreachs();
