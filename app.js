const express = require('express');
const path=require('path');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const app = express();
const errorController=require('./controller/error')

app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'node_modules','bootstrap')))
app.use('/admin',adminRoutes.router);
app.use(shopRoutes);

app.use(errorController.setError)
app.listen(3000)