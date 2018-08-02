import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'First Name is required'
    },
    lastName: {
        type: String,
        required: 'First Name is required'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});