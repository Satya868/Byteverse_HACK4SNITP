import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    adminName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    charges:{
        type: Number,
        required: true
    },
    adminPhone:{
        type: Number,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
    education:{
        type: String,
        required: true
    },
    adminEmail:{
        type: String,
        required: true
    },
    photo:{
        data: Buffer,
        contentType: String,
    }
})

export default mongoose.model('admin', adminSchema) 