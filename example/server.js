/**
 * Created by lenovo on 2018/1/4.
 */
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './request.html'));
});

app.post('/hello', (req, res) => {
  console.log('body: ', req.body.name);
  res.json({name: 'hello'})
})

app.listen(2099);