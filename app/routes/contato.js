module.exports = function(app){
    var controller = app.controllers.contato;
    app.route('/contatos')
        .get(controller.listaConstatos);
    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato);
};