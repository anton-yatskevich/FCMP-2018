const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :date[web]'));
app.use(router);
app.use(errorHandler);

app.listen(port, () => console.log(`App listening on port ${port}`));
