angular.module('ifsp').controller('ContatosController', function($resource, $scope){
    $scope.contatos = [
        {"_id": 1, "nome": "Fabio Teixeira", "email": "fabio.teixeira@ifsp.edu.br"},
        {"_id": 2, "nome": "Luis Henrique", "email": "luis.malafaia@ifsp.edu.br"},
        {"_id": 3, "nome": "Danielle de Souza", "email": "dani.souza@ifsp.edu.br"}
    ];

    $scope.filtro='';

    var Contato = $resource('/contatos');
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
});