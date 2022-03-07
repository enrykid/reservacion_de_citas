const jwt = require('jsonwebtoken');
const User = require('../models/usersModel')

exports.createUSer = async(req,res) =>{
    try {
        let user;
        user = new User(req.body)
        await user.save();    
        const token = jwt.sign({_id: User._id}, 'secretkey')
        res.status(200).json({token});  
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}


exports.signinUSer = async(req,res) =>{
    try { 
    const {email, password} = req.body;
       let user = await User.findOne({email});

        if (!user) return res.status(401).send('El correo no existe');

        if (user.password !== password) return res.status(401).send('Contraseña incorrecta');

		const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}