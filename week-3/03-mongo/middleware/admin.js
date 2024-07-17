const {Admin} = require('../db/index');
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username = req.headers.username;
    let password = req.headers.password;
    console.log(username)
    Admin.findOne({username, password}).then((exists) => {
        //console.log(exists);
        if(exists){
            next();
        }else{
            res.status(403).json({
                "msg" : "Admin doesn't exist"
            });
        }
    });
}

module.exports = adminMiddleware;
