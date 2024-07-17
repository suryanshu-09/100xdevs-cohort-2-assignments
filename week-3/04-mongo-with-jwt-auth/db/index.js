const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:3Y2kiu2F8wgqVfD2@cluster0.amfype5.mongodb.net/assignmentMongoJWT?authSource=admin&replicaSet=atlas-dwa8p0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');

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
