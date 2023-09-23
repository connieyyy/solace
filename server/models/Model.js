import mongoose from "mongoose";

const LetterSchema = mongoose.Schema(
    {
        person: {
            type: String, 
            required: true,
        }, 
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Letter = mongoose.model('Cat', LetterSchema);