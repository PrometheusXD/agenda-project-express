exports.middlewareGlobal = (req, res, next) => {
  console.log('global middleware');
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err) {
    console.log(err);
    return res.render('404.ejs');
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
