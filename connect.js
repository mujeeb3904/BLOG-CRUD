const moongose = require("mongoose");


async function ConnectToMongoDB(blog) {
    return moongose.connect(blog);
}

module.exports = ConnectToMongoDB;