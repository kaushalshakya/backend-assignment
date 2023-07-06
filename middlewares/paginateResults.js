const paginateResults = (req, res, next) =>{
    req.pagination = {};
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    req.pagination.page = page;
    req.pagination.limit = limit;
    req.pagination.offset = (page -1) * limit;
    next();
}

module.exports = paginateResults;