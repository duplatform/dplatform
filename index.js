const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) =>  res.json({ user: 'geek' }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'react/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/react/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);