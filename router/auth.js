const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/conn');
  const User = require('../model/userSchema');


  router.post('/createAcc', async (req, res) => {

    const { name, email, password, cpassword } = req.body;

          if(!name || !email || !password || !cpassword) {
            return res.status(422).json({ error: "Please filled all required input fields" });
          }

          try{

            const userExist =  await  User.findOne({ email: email });

                  if(userExist) {

                    return res.status(422).json( { error: "Email already Exist" });
                  
                  }else if(password !== cpassword) {

                    return res.status(422).json( { error: "Password are not matching" });

                  }else{

                      const user =  new User({ name, email, password, cpassword });
                      await user.save();
                      res.status(201).json( { message: "User registered successfully" });
                  }

                  
               
              }catch(err) { 
            console.log(err);
          } 
     });

// signin

router.post('/signin', async (req, res) => {

  try{
   
   const {email, password} = req.body;

  if(!email || !password) {
      res.status(400).json({ error: "Please filled all requied fields." });
  }

  const userLogin = await User.findOne({email: email});
  
  if(userLogin) {

         const isMatch = await bcrypt.compare(password, userLogin.password);
        
            const token = await userLogin.generateAuthToken();
            console.log(token);
            
            res.cookie("jwtoken", token, {
              expires: new Date(Date.now() + 25892000000),
            });

            if(!isMatch) {
              res.status(400).json({error: "Invalid Credentials"});
          }else{
          res.json({message: "User signin successfully" }); 
      }
}else{

  res.status(400).json({error: "Invalid Credentials"});
}
  
}catch(err) {

  console.log(err);
}
});


// locker page

router.get('/locker', authenticate, (req, res) => {
  res.send(req.rootUser);
});

//logout page

router.get('/logout', (req, res) => {
  res.clearCookie('jwtoken', {path: '/'});
  res.status(200).send("User Logout");
});

module.exports = router;