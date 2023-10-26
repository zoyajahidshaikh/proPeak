const mongoose = require('mongoose');


// Define the database model
const UploadGlobalRepositoryFileSchema = new mongoose.Schema({
    title: {
        type: String
    },
    fileName: {
        type: String 
    },
    description: {
        type: String
    },
    path: {
        type: String
    },
    createdOn: {
        type: Date
    },
    isDeleted: {
        type: Boolean
    },
    createdBy: {
        type: String
    }
}, { versionKey: false });



const UploadRepositoryFile = module.exports = mongoose.model('UploadRepositoryFile', UploadGlobalRepositoryFileSchema);