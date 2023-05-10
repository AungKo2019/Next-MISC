export default function handler(req,res){
    res.setPreviewData({user:'vishwas'})
    res.redirect(req.query.redirect)
}