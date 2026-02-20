const express = require('express')
const app = express()
const port = 3000


app.use(express.json());

app.get('/user/:id', (req, res) => {
  res.send('Hello merlin!')
})
app.get('/', (req, res) => {
  res.send('MY WEEK TWO API!')
})
app.use((req, res, next) => {
  console.log('');
  next();
})
app.post("/echo", (req, res)=> {
  res.json({echoed: req.body});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
