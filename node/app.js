const express = require('express')
const cors = require('cors')
const Member = require('./mongodb')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const app = express()
const { login, loginInfo, logout, oldPwd, updatePwd } = require('./mock/mock')
const { add, editVip, delVip } = require('./mock/list')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/user/login', (req, res) => {
  // login().then(res => {
  //   console.log(res);
  // })
  res.json(login())
})
app.get('/user/info/:token', (req, res) => {
  res.json(loginInfo())
})
app.post('/user/logout', (req, res) => {
  res.json(logout())
})
app.get('/user/vipList/:pageSize/:currentChange', (req, res) => {
  const { pageSize, currentChange } = req.params
  const query = {};
  const { username, mobile, cardId } = req.query;
  const userReg = new RegExp(username, "g");
  const mobileReg = new RegExp(mobile, "g");
  const cardIdReg = new RegExp(cardId, "g");
  query.$or = [
    { username: { $regex: userReg } },
    { mobile },
    { cardId },
  ];
  const options = {
    page: currentChange,
    limit: pageSize
  }
  Member.paginate(query, options, (err, result) => {
    res.json({
      statusCode: 2000,
      flag: true,
      message: "success",
      data: result.docs,
      total: result.totalDocs
    });
  })
})
app.post('/user/add', (req, res) => {
  // console.log(req.body);
  res.json(add(req.body))
})
app.post('/user/pwd', (req, res) => {
  const { userId, password } = req.body
  res.json(oldPwd(userId, password))
})
app.put('/user/pwd', (req, res) => {
  const { userId, password } = req.body
  res.json(updatePwd(userId, password))
})
app.post('/user/edit', (req, res) => {
  // console.log(req.body);
  res.json(editVip(req.body))
})
app.post('/user/del', (req, res) => {
  res.json(delVip(req.body))
})
app.listen(3000, () => {
  console.log('serve is running');
})