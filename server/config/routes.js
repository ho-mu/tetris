module.exports=function(app){
	app.get('/',function(req,res){
		res.render('index')
	})
	app.post('/tetris',function(req,res){
		console.log(req.body)
		res.render('tetris',{user_name: req.body.user_name})
	})
}