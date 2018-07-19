const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },

    activites: [String, String, String],
    required: true,

    launchDate: {
        default: Date
    },

    stops: [{
        location: {
            city: String,
            state: String,
            zip: {
                type: Number,
                required: true
            }
        },

        weather: {
            type: String,
            required: true
        },

        attendance: {
            type: Number,
            min: 1,
            required: true
        }
    }]
});

module.exports = mongoose.model('Tour', schema);