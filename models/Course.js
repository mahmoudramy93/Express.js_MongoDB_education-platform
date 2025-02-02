const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    track: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track'
    },
    lessons: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        // required: true
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
