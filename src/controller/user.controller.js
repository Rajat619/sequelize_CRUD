const service = require("../service/user.service");

let controller = {};

controller.registerUser = async (req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body);
        if (!result.isValid()) {
            throw new Error('User is not authenticated');
        }

        await service.createUser(result);

        return res.statusCode(200).json({
            success: true,
            message: 'You are successfully resigstered!',
            data: {}
        })
    } catch (error) {
        return res.statusCode(400).json({
            success: true,
            message: error.message,
            data: {}
        })
    }
};

module.exports = controller;