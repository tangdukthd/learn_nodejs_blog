module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            //Hợp nhất 2 object
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }
    next();
};
