'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
    cid: {
        type: String,
        Required: 'Please enter'
    },
    firstname: {
        type: String,
        Required: 'Please enter'
    },
    lastname: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    mobile: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    imageUrl: {
        type: String,
        Required: 'Please enter'
    }
},
{
    versionKey: false
}
)


module.exports = mongoose.model('Contacts', ContactSchema)
