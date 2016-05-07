'use strict'

exports.renderHomePage = (req, res) => {
    res.sendFile(rootPath + '/app/views/home.html');
}
