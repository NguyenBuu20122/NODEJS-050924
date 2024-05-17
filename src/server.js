const express = require('express') //commonjs
const app = express()//app express

require('dotenv').config() // khai báo sử dung thư viện dotevn
const port = process.env.PORT||8888;//cong hoat dong cua trang web
const hostname=process.eventNames.HOST_NAME;

const path= require('path'); // lay duong dan vi tri cua file dang su dung-- trong project này thì thư viện này sử dụng để tìm thư mục chứa template engine

//config engine
app.set('views', path.join(__dirname,'views'))// xac dinh vi tri cua thu muc engine.
app.set('view engine', 'ejs')// dat ten cho engine

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World!\n This page is running with express 4.19.2')// res.render () tra ve kieu chuoi 
})

app.get('/abc', (req, res) => {
  res.render('sample.ejs')// res.render ( tra ve du lieu dong).
}) 

app.get('/dynamic', (req, res) => {
  res.send('<h1>THIS IS A DYNAMIC CONTENT</h1>')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})