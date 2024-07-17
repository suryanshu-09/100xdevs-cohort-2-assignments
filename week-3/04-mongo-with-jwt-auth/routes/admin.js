const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");
const zod = require("zod");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
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
            username: username,
            password: password
            });
        }
    });
    }
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    let courseSchema = zod.object({
        title: zod.string(),
        description: zod.string(),
        price: zod.number(),
        imageLink: zod.string().url()
    });
    if(!courseSchema.safeParse(req.body)){
        res.sendStatus(403);
    }
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;
