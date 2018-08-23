const responses = require('./responses').responses;

exports.headerValidator = (req, res, next) => {
  if (!req.headers.login)
    res.json(responses.failure("Email headers: login is not defined."));
  else if (!req.headers.password)
    res.json(responses.failure("Email headers: password is not defined."));
  else next();
};
