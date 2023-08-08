const { verifyToken } = require("../helpers/jwtHelper");
const { User } = require("../models");

async function authentication(req, res, next) {
    try {
        const { access_token } = req.headers;
        const payload =  verifyToken(access_token);
        const targetUser = await User.findByPk(payload.id);
        if (!targetUser) throw {name: "NotAuthenticated"};

        const isAdmin = targetUser.role === 'admin';
        // if (!isAdmin) throw {name: "InvalidEmailPassword"}
        
        req.user = payload
        if (isAdmin) {
            req.user.role = "admin"
        } else {
            req.user.role = "viewer"
        }
        next();
    } catch (err) {
        next(err)
    }
}

module.exports = authentication