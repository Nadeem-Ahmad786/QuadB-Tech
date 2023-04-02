const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://Nadeem-Ahmad786:gNAzmEubcDUQmWY@cluster0.xyoorkm.mongodb.net/quadbtechDB?retryWrites=true&w=majority`, {
            useNewUrlParser: true
          });
        console.log(`MongoDB Connected...`);
    } catch (err) {
        console.error(err);
    }

}

module.exports = connectDB;


