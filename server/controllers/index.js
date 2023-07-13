const { User, Post, Tag, sequelize } = require("../models");
const { comparePassword } = require ("../helpers/bcryptHelper");
const { signToken } = require("../helpers/jwtHelper");

class Controller {
    static async registerAdmin(req, res, next) {
        try {
            const {username, email, password, phoneNumber, address} = req.body;
            const newAdmin = await User.create({
                username, email, password, role: "admin", phoneNumber, address
            })
            res.status(201).json({message: `User #${newAdmin.id} with username ${newAdmin.username} registration success`})
        } catch (err) {
            next(err)
        }
    }

    static async loginAdmin(req, res, next) {
        try {
            const {email, password} = req.body;
            if (!email) throw {name: "NullEmail"};
            if (!password) throw {name: "NullPassword"};

            const targetUser = await User.findOne({where: {email}});
            if (!targetUser) throw {name: "InvalidEmailPassword"};
            const isPasswordMatch = comparePassword(password, targetUser.password);
            if (!isPasswordMatch) throw {name: "InvalidEmailPassword"};
            const isAdmin = targetUser.role === 'admin';
            if (!isAdmin) throw {name: "InvalidEmailPassword"}
            
            const access_token = signToken({
                id: targetUser.id,
                username: targetUser.username
            })

            res.status(200).json({access_token})
        } catch (err) {
            next(err)
        }
    }

    static async readPosts(req, res, next) {
        try {
            const data = await Post.findAll()
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async addPost(req, res, next) {
        const transaction = await sequelize.transaction()
        try {
            const {title, content, imgUrl, categoryId, tags} = req.body
            const authorId = req.user.id

            const newPost = await Post.create({title, content, imgUrl, categoryId, authorId}, {transaction})
            const tagsToCreate = tags.map(e => {
                return {
                    name: e,
                    postId: newPost.id
                }
            })
            
            await Tag.bulkCreate(tagsToCreate, {transaction})
            const successMsg = `New post #${newPost.id} with title '${newPost.title.substring(0, 12)}' added`

            await transaction.commit()
            res.status(201).json({message: successMsg})
        } catch (err) {
            await transaction.rollback()
            next(err)
        }
    }

    static async readPostById(req, res, next) {
        try {
            
        } catch (err) {
            
        }
    }
}

module.exports = Controller