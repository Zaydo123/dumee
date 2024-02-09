const getClientIP = require('../utils/ipUtils');
exports.get = (req, res) => {

    try {
        req.body = JSON.parse(JSON.stringify(req.body));
    }
    catch (e) {


        req.body = {};
    }

    try {
        req.query = JSON.parse(JSON.stringify(req.query));
    }
    catch (e) {
        req.query = {};
    }

    try {
        req.cookies = JSON.parse(JSON.stringify(req.cookies));
    }
    catch (e) {
        req.cookies = {};
    }
    
    let data = {
        headers: req.headers,
        body: req.body,
        query: req.query,
        ip: getClientIP(req),
        route: req.route.path,
        cookies: req.cookies
    };

    res.json(data);
}
