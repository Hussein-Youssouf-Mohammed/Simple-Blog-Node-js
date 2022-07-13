const mongoose = require('mongoose')

const Post  = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

// Post.create({
//     title: 'second Title',
//     description: 'second Descritpion',
//     content: 'second Content Text'
// }, (error, post) => {
//     console.log(error, post)
// })

Post.find({}, (error, posts) => {
    console.log(error, posts)
})

// Post.findByIdAndUpdate("6293a32d0222f405a798ba28", {
//     title: "Hussein Youssouf Mohammed Abker Musa Ali"
// }, (error, post) => {
//     console.log(error, post)
// })