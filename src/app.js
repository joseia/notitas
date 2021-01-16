const express = require('express');
const app = express();
const indexRouter = require('./routers/index');
const path = require('path');
const methodOverride = require('method-override')


app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})