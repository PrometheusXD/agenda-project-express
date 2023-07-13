const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('contato.ejs', {
    contato: {},
  });
};

exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('/contato/index'));
      return;
    }

    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`),
    );
    return;
  } catch (e) {
    console.log(e);
    res.render('404.ejs');
  }
};

exports.editIndex = async (req, res) => {
  if (!req.params.id) return res.render('404.ejs');

  const contato = new Contato();
  const contatoSelect = await contato.buscaPorId(req.params.id);

  if (!contatoSelect) return res.render('404.ejs');

  res.render('contato.ejs', { contato: contatoSelect });
};

exports.edit = async (req, res) => {
  try {
    if (!req.params.id) return res.render('404.ejs');
    const contato = new Contato(req.body);

    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect(`/contato/index/${req.params.id}`));
      return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`),
    );
    return;
  } catch (e) {
    console.log(e);
    res.render('404.ejs');
  }
};

exports.delete = async (req, res) => {
  if (!req.params.id) return res.render('404.ejs');

  const contato = new Contato();
  const contatoSelect = await contato.delete(req.params.id);

  if (!contatoSelect) return res.render('404.ejs');

  req.flash('success', 'Contato apagado com sucesso.');
  req.session.save(() => res.redirect(`/`));
  return;
};
