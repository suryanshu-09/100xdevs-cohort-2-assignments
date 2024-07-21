const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your_url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        courses: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    //id: Number,
    title: String,
    description: String,
    price: Number, 
    imageLink: String,
    //published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
