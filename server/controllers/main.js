'use strict'

exports.renderHomePage = (req, res) => {
    const template = require('app/views/home.marko');
    let versionNum = process.env.npm_package_version;
    template.render({version : versionNum, title : 'Weather'}, res);
};

exports.renderApiRequestsCount = (req, res) => {
    const template = require('app/views/api-requests-count.marko');
    const dbCollection = require('server/db').getApiRequestCountCollection();

    dbCollection.find().toArray((err, documents) => {
        let items = [];
        if(!err) {
            items = documents;
            items.reverse();
        }

        template.render({items : items, title : 'Api Requests Count'}, res);
    });
};
