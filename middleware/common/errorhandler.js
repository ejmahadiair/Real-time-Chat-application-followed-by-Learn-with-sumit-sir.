const http_error = require("http-errors");
//404 not found
const notfound = (req, res, next) => {
    next(http_error(404, "Your request conten was not found!"));
};
const errorhandler = (err, req, res, next) => {
    res.locals.error = {
        status: 404,
        message: err.message,
    };

    if (res.locals.html) {
        //html response
        res.render("error", {
            title: "Error page",
        });
    } else {
        //json response
        res.json(res.locals.error);
    }
};

module.exports = {
    notfound,
    errorhandler,
};
