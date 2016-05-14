'use strict'

exports.saveUserInfo = (req, res) => {
    let db = require('server/db').db();
    let formData = req.body;
    if (typeof formData != undefined && Object.keys(formData).length != 0 && formData.firstName != '') {
        console.log(formData)
            //save user info to database
        if (db == null || db == undefined) {
            console.log('No connection to DB');
            res.redirect('/?success=false');
            return;
        }
        db.collection('user').save(formData, (err, result) => {
            if (err) {
                res.redirect('/?success=false');
                console.error(err.stack);
                return;
            } else {
                console.log('successfully saved user to DB');
                res.redirect('/?success=true');
            }
        });
    } else {
        res.redirect('/?success=false');
    }
}
