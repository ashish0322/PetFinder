
module.exports = function(){
    var userSchema = require("./../user/user.schema.server");
    var mangoose = require("mongoose");
    var AdminSchema = mangoose.Schema({
        username: String,
        password: String,
        usersPresent:[userSchema]
    },{collection: "project.admin"});

    return AdminSchema;
};
