exports.middlewareGlobal = (req, res, next) => {
  console.log('global middleware')
  next()
}


exports.checkCsrfError = (err, req, res, next) => {
  if(err && err.code === 'EBADCSRFTOKEN'){
    return res.render('404.ejs')
  }
}


exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}
