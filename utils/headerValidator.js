const generateFailureResponse = (error) => {
    return {
        status: 500, 
        error: error, 
        response: null
    }
};

exports.headerValidator = (req, res, next) => {
    if (!req.headers.login)
        res.json(generateFailureResponse('Email login is not defined.'));
    else if (!req.headers.password)
        res.json(generateFailureResponse('Email password is not defined.'));
    else
        next();
};