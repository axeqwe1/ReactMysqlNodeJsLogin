const { json } = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const conn = require('../db/db');
const app = express();
// const user = require('../model/user.model');
const router = express.Router();

router.post("/create",(req,res) => {
    const {username,password,email} = req.body;
    try{
      conn.query(
        "INSERT INTO user (username, password, email) VALUES(?, ?, ?)",
        [username, password, email],
        (err,result,field) =>{
          if(err){
            console.log('error insert');
            return res.status(400).send()
          }
          return res.status(200).json({Message:'successfully'})
        }
      )
    }catch(err){
      console.log(err)
      return res.status(500).send()
    }
})

router.get('/read/:id',(req,res) => {
  const id = req.params.id
    try{
      conn.query('SELECT * FROM user WHERE iduser = ?',[id] ,(err, result, field) => {
        if(err){
          console.log(err);
          return res.status(400).send();
        }
        return res.status(200).json(result)
      });
    }catch(err){
      console.log(err);
      return res.status(500).send();
    }
})
router.put('/update',(req,res) => {
   const username = req.body.username;
   const newPassword = req.body.newPassword;
   console.log(username);
   console.log(newPassword);
   try{
      conn.query('UPDATE user SET password = ? WHERE username = ?',[newPassword,username],
      (err,result,field) => {
        if(err){
          console.log(err)
          return res.status(400).send()
        } 
        return res.status(200).json({Message:'Test'})
      })
   }catch(err){
      console.log(err);
      return res.status(500).send();
   }
})
router.delete('/delete/:id',(req,res) => {
  const id = req.params.id;
  conn.query('DELETE FROM user WHERE iduser = ?' , [id],
  (err,result,field) => {
    try{
    if(err){
      console.log("fail delete");
      return res.status(400).send()
    }
    return res.status(200).json({Message:'delete successfully'})
      }catch(err){
        console.log(err)
        return res.status(500).send();
      }
    }
  )
})
router.post('/signIn',(req,res) => {
  const username = req.body.username;
  const password = req.body.password;  
  conn.query('SELECT * FROM user WHERE username = ? and password = ?' ,[username,password],
  (err,result,field) => {
    try{
      if(err){
        console.log("Fail login");
        return res.status(400).send()
      }
      if(result.length > 0){
        console.log("login success");
        return res.status(200).json(result)
      }else{
        return res.json({Message:'Not Found User',Status:'error'})
      }
    }catch(err){
      console.log(err)
      return res.status(500).send();
    }
  })
})
    module.exports = router;