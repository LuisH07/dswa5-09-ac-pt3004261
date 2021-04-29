angular.module('ifsp').controller('ContatosController', function($resource, $scope){
    $scope.contatos = [];
    $scope.filtro='';
    $scope.mensagem = {texto: ''};

    var Contato = $resource('/contatos/:id');
    function buscaContatos(){
        Contato.query(
            function(contatos){
                $scope.contatos = contatos;
            },
            function(erro){
                console.log("Não foi possivel obter a lista de contatos");
                console.log(erro);
            }
        );
    }
    buscaContatos();

    $scope.remove = function(contato) {
        console.log(contato);
        Contato.delete({id : contato._id},
            buscaContatos,
            function(erro){
                console.log("Não foi possivel remover");
                console.log(erro);
                $scope.mensagem = {texto: "Não foi possivel remover o contato"};
            });
    };
});