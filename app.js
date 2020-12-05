const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = ''
const employeeRoutes = require('./routes/employees');

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
})
.then(() => console.log('MongoDB connected!'))
.catch((err) => console.log(err));

const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(bodyParser.urlencoded({
    extended: true
}));

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Connected!');
})

app.use('/', employeeRoutes);