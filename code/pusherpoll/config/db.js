const mongoose = require('mongoose');


// map global promises

mongoose.Promise = global.Promise

// mongoose connect
mongoose.connect('mongodb://brad:brad@ds239968.mlab.com:39968/pusherpool')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));