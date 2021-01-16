let db = require('../database/models');

module.exports = {
    index: function(req, res) {
        db.Notas.findAll({where:{
            status: 1
        }})
        .then(function(notitas) {
            return res.render('index', {
                notitas: notitas
            })
        })
       },
       create:function(req,res){
        db.Notas.create({
            title: req.body.title,
            nota: req.body.nota
        })
        .then(function(){
            res.redirect('/')
        })
    },
    detail: function(req,res){
            db.Notas.findByPk(req.params.id)
            .then(function(unaNota) {
                res.render('detail', {
                    unaNota: unaNota
                })
            })
    },
    edit: function(req,res){
        db.Notas.update({
            title: req.body.title,
            nota: req.body.message
        }, {
            where: {
            id: req.params.id
        }}).then(function(){
            res.redirect('/')
        })
    },
    delete: function(req,res){
        db.Notas.update({
            status: 0
        }, {
            where: {
            id: req.body.id
        }}).then(function(){
            res.redirect('/')
        })
    }

    
}