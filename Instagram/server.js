var express = requiere('expess');

var app = express();

app.get('/', function (req, res){
  res.send('Hola mundo');
})

app.listen(3000, function (err){
  if (err) return console.log('error'),precess.exit(1);


console.log('instagram por el puerto 3000');
})
