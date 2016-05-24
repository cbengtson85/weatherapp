'use strict'

exports.renderHomePage = (req, res) => {
    let template = require('app/views/home.marko');
    let versionNum = process.env.npm_package_version;
    template.render({ version : versionNum }, res);
};
