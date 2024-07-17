const { Router } = require("express");
const router = Router();
const zod = require("zod");
const {User, Course} = require("../db/index");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logicconst username = req.body.username;
    const username = req.body.username;
    const password = req.body.password;
    const schema = zod.string();
    const userCheck = schema.safeParse(username);
    const passCheck = schema.safeParse(password);
    if(!userCheck.success || !passCheck.success){
        res.sendStatus(403);
    }else{
    User.findOne({username, password}).then(async (exists) => {
        if(exists){
            res.status(402).json({
                "msg" : "Admin already exists"
            });
        }else{
            await User.create({
                username,
                password                
                //purchasedCourses:[{}]
            });
            res.json({
                message: "User created successfully"
            });
        }
    });
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    let allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Course purchased successfully"
    });
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router
