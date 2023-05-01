import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    query: {
      byUsername(username) {
        return this.where({ username: new RegExp(username, 'i') });
      }, 
      // Example of use
      // Animal.findOne().byName('fido').exec((err, animal) => {
      //   console.log(animal);
      // });
    },
    virtuals: {},
  }
);

const User = mongoose.model('User', userSchema);
export default  User;
