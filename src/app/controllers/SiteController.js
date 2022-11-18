const Course = require('../models/Course');

class SiteController {
    // [GET] /
    home(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
                return;
            }
            res.status(400).json({ error: 'ERROR' });
        });
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        console.log(req);
        res.render('search');
    }
}

module.exports = new SiteController();
