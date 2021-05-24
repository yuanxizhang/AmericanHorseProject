const mongoose = require('mongoose'), 
validator = require('validator'),
bcrypt = require('bcryptjs'),
jwt = require('jsonwebtoken')


const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema (
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        organizationName: { 
            type: String,
            trim: true
        },
        ein: { 
            type: Integer,
            trim: true,
            validate(value){
                if (!validator.isValid(value)){
                    throw new Error('Employer Identification Number is invalid')
                }
            }
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
        userName: { 
            type: String, 
            trim: true,
            unique: true,
            required: true,
            validate(value) {
                if(value.length < 7) {
                    throw new Error('username must be at least 7 characters')
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
        address: {
            type: String,
            trim: true,
            
        },
        address2: { 
            type: String,
            trim: true
        },
        city: { 
            type: String,
            trim: true
        },
        state: { 
            type: String,
            trim: true
        },
        zip: { 
            type: Integer,
            validate(value) {
                if(value.length !== 5) {
                    throw new Error('invalid U.S. zip code')
                }
            }
        },
        phoneNumber: {
            type: String,
            validate(value) {
                var phonenumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                if(!value.match(phonenumber)) {
                    throw new Error('invalid phone number')
                }
            }
        },
        bio: {
            type: String,
        },
        orgWebsite: {
            type: String,
            validate(value){
                var url = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
                if(!value.match(orgWebsite)){
                    throw new Error('invalid url')
                }
            }
        },
        admin: {
            type: Boolean,
            required: true,
            default: false
        },
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