const titleResponse = (title) => {
    return (req, res, next) => {
        res.locals.html = true;
        res.locals.title = `${title}` + " Chat Application";
        next();
    };
};
module.exports = titleResponse;
