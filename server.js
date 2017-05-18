var express=require('express')
var app = express()
var bp=require('body-parser')
var path=require('path')
app.use(express.static(path.join(__dirname + '/views')))
app.use(bp.urlencoded({extended:true}))
app.set('views',path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

require('./server/config/routes.js')(app)

app.listen(8000,function(){
	console.log('server is running')
})
