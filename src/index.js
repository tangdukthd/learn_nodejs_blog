const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { stringify } = require('querystring');
const methodOverride = require('method-override');

const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db/index');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); //set đường dẫn file tĩnh vào thư mục public
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
// app.use(morgan('combined'))

app.use(methodOverride('_method'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
