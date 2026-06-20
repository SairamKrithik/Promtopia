import {Schema, model, models} from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username already exists'],
        match: [/^[a-zA-Z0-9_ ]+$/, 'Username is invalid'],
        minlength: [3, 'Username must be at least 3 characters'],
        maxlength: [20, 'Username must be at most 20 characters'],
    },
    image: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema)

export default User