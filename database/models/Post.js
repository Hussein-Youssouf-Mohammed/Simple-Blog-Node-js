const mongoose  = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    subtitle: String,
    content: String,
    image: String,
    createAt: {
        type: Date,
        default: new Date() 
    }
})

const Post  = mongoose.model('Post', PostSchema)

module.exports =  Post