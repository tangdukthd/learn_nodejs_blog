const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const { stringify } = require('querystring')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public'))) //set đường dẫn file tĩnh vào thư mục public
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
// app.use(morgan('combined'))

app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.get('/search', (req, res) => {
  console.log(req.query)
  res.render('search')
})
app.post('/search', (req, res) => {
  console.log(req.body);
  res.send(`${stringify(req.body)}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})