exports.setError=(req,res,next)=>{
    res.status(404).render('not-found',{docTitle:'not-found',path:'/not-found'})
}