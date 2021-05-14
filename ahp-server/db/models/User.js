const mongoose = require('mongoose'), 
validator = require('validator'),
bcrypt = require('bcryptjs'),
jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true, 
            lowercase: true,
            validate(value) {
                if(!validator.isEmail(value)){
                    throw new Error('email is invalid')
                }
            }
        },
        password: {
            type: String,
            required: true,
            trim: true, 
            validate(value) {
                if(value.toLowerCase().includes('password')) {
                    throw new Error('password cannot be password')
                }
                if(value.length < 10) {
                    throw new Error('password must be at least 10 characters')
                }
            }
        },
        admin: {
            type: Boolean,
            required: true,
            default: false
        },
        
        birthDate: String,
        occupation: String,
        address: String,
        phone: String,
        socialMediaProfile: String,
        tokens: [
            {
                token: {
                    type: String, 
                    required: true
                }
            }
        ], 
        adoptionRequests : [{ type: Schema.Types.ObjectId, ref: 'AdoptionRequest' }]
    },
    {
        timestamps: true
    }
)

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      name: user.name
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password, try again.');
  return user;
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;