const { Schema, Types } = require('mongoose');


const locationSchema = new Schema({

    locationName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    
});


module.exports = locationSchema;

