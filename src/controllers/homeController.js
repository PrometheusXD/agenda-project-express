exports.parginaInicial = (req, res) => {
  res.render('index.ejs', {
    titulo: 'Este é o titulo'
  })
  return
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}
