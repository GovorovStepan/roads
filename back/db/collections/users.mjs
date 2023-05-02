import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema(
  {
    login: {
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
      byLogin(login) {
        return this.where({ login: new RegExp(login, 'i') });
      }, 
    },
    virtuals: {},
  }
);

const User = mongoose.model('User', userSchema);
export default  User;
