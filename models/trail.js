import mongoose from 'mongoose';

const schema = new mongoose.Schema({ name:'string', difficulty:'string'});
module.exports = mongoose.model('Trail', schema);
