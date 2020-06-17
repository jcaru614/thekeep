const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const emailRegexChecker = (val) => {
    if(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val)) {
        return true
    } else {
        return false
    }
}

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "Enter a first name"]
    },
    lastName: {
        type: String,
        required: [true, "Enter a last name"]
    },
    email: {
        type: String,
        required:[true, "Email is required"],
        validate:[emailRegexChecker, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "A password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    tasks: [
        {
            title: {
                type: String,
                required: [3, 'title is required']
            },
            description: {
                type: String,
                minlength: [3, 'must be at least 3 characters']
            },
            date: {
                type: Date,
                required: [true, 'A date is required']
            },
        },
    ]
}, { timestamps: true })

    UserSchema.virtual('confirmPassword')
        .get(() => this._confirmPassword)
        .set((value) => this._confirmPassword = value),
    
    UserSchema.pre('validate', function (next) {
        if (this.password !== this.confirmPassword) {
            this.invalidate('confirmPassword', 'Password must match confirm password');
        }
        next();
    })

    UserSchema.pre('save', function(next) {
        bcrypt.hash(this.password, 10)
          .then(hash => {
            this.password = hash;
            next();
          })
      })

module.exports = mongoose.model('User', UserSchema)