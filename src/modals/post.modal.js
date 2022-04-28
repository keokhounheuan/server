const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
      type: 'string',
      required: true,
  },
  description: {
      type: 'string',
  }
  
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post;