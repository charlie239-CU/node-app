const Product=require('../model/product')

exports.getAddProducts=(req, res, next) => {
    res.render('add-product',{docTitle:'add-product',path:'/admin/add-product'})
 };

 exports.postProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.fetchProducts=(req, res, next) => {
   const product=Product.fetchAll(product=>{
    res.render('shop',{products:product,docTitle:'shop',path:'/'})
   });
    
};