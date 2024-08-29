import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import { hasshedPassword } from "../helper/helper.js";


export const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashed = await hasshedPassword(password);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashed,
            resume: req.file ? req.file.path : null,
        });

        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with success
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            userId: newUser._id
        });
    } catch (error) {
        console.error('Signup Error:', error); // Log the error
        res.status(500).json({
            success: false,
            message: 'Error while registration'
        });
    }
};
