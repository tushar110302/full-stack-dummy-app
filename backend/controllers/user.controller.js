import { User } from "../models/user.model.js";

const addEmployee = async (req, res) => {
    try {
        const {name, email, title, department, role} = req.body;
        if(!name || !email || !title || !department || !role){
            return res.status(400).json({
                message: "All the fields are required",
                succcess: false
            })
        }
        const user = await User.create({
            name,
            email,
            title,
            department,
            role,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`
        });

        return res.status(201).json({
            message: "Employee successfully added",
            data: user,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: null,
            success: false
        })
    }
}

const getEmployee = async (req, res) => {
    try {
        const user = await User.find();
        return res.status(200).json({
            message: "Employee successfully fetched",
            data: user,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: null,
            success: false
        })
    }
}

export {addEmployee, getEmployee}