const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db/index");
const zod = require("zod");
const router = Router();
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const schema = zod.string();
    const userCheck = schema.safeParse(username);
    const passCheck = schema.safeParse(password);
    if(!userCheck.success || !passCheck.success){
        res.sendStatus(403);
    }else{
    Admin.findOne({username, password}).then(async (exists) => {
        if(exists){
            res.status(402).json({
                "msg" : "Admin already exists"
            });
        }else{
            await Admin.create({
                username,
                password
            });
            res.json({
                message: 'Admin created successfully'
            });
        }
    });

    }
    // check if a user with this username already exists
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    let title = req.body.title;
    let description = req.body.description; 
    let price = req.body.price;
    let imageLink = req.body.imageLink;
    let courseSchema = zod.object({
        title: zod.string(),
        description: zod.string(),
        price: zod.number(),
        imageLink: zod.string().url()
    });
    if(!courseSchema.safeParse(req.body)){
        res.sendStatus(403);
    }
    let newCourse = await Course.create({
        //id: ++id,
        title,
        description, 
        price,
        imageLink,
        //published: true
    });
    res.json({
        "message": 'Course created successfully', 
        "courseId": newCourse._id 
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let allCourses = await Course.find({});
    res.json({
        "courses" : allCourses
    })
});

module.exports = router;
