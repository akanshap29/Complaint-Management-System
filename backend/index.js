import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// import dotenv from 'dotenv'

// dotenv.config({path: 'dotenvFile.env'});

const app= express()
app.use(cors())
app.use(json())

const MONGO_URI='mongodb://localhost:27017/System';

mongoose.connect(MONGO_URI
)
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.log('MongoDB connection error:',err));

const UserSchema = new mongoose.Schema({
    role: String,
    Name: String,
    email:{type: String, unique:true},
    password:String,
    
},{ collection: 'Login'})

const UserModel = mongoose.model("Login",UserSchema)

// Signup page
app.post('/signup', async (req, res) => {
    const { role, Name, email, password } = req.body;
    try {
        if (role === 'admin') {
            console.log("admin trying to signup")
            const existingAdmin = await UserModel.findOne({ email });
            if (existingAdmin) {
                return res.json("Admin already exists");
            }else{
                console.log("Student trying to signup")
                const newUser = new UserModel({role, Name, email, password });
                await newUser.save();
                return res.json("Admin registered successfully");
            }
        }
        else{
            const newUser = new UserModel({role, Name, email, password });
        await newUser.save();
        res.json("User registered successfully");
        }
        
    } 
    catch (error) {
        console.error('Error registering user:', error);
        res.json("Error registering user");
    }
});

//Login Page :
app.post('/login', async (req, res) => {
    const { email, password ,role } = req.body;
    try {
        console.log('Login attempt:', { email, password, role });
        const user = await UserModel.findOne({ email, role });
        console.log('Found user:', user);
        if (user) {
            if(user.password === password){
                res.json("Login Successfully");
            }else{
                res.json("Invalid Passowrd")
            }
        } else {
            res.json("Username not found");
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.json("Error logging in");
    }
});

//OLD Login page
// app.post('/login', async (req,res)=> {
//     const {email, password} = req.body;
//     UserModel.findOne({email:email})
//     .then(user => {
//         if(user){
//             if(user.password===password) {
//                 res.json("Login Successfully")
//             }
//             else{
//                 res.json("The password is incorreect")
//             }
//         }
//         else{
//             res.json("No record existed")
//         }
//     })
// })

app.listen(3000,() => {
    console.log("Server is Running at 3000")
})

// (14.139.38.118/32)
