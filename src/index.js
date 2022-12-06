const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

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

//Custom middleware
app.use(SortMiddleware);

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'fa-solid fa-sort',
                    asc: 'fa-solid fa-sort-up',
                    desc: 'fa-solid fa-sort-down',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const icon = icons[sortType];
                const type = types[sortType];
                return `<a href="?_sort&column=${field}&type=${type}" class="${icon}"></a>`;
            },
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
