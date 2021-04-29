angular.module('ifsp').controller('CursosController', function($resource, $scope){
    $scope.cursos  = [];
    $scope.filtro='';
    $scope.mensagem={texto: ''}
    var Curso = $resource('/cursos/:id');
    function buscaCursos(){
        Curso.query(
            function(cursos){
                $scope.cursos = cursos;
                $scope.mensagem = {};
            },
            function(erro){
                console.log("Não foi possivel obter a lista de contatos");
                console.log(erro);
                $scope.mensagem = {texto: "não foi possivel"};
            }
        )
    }
    buscaCursos();

    $scope.remove = function(curso) {
        console.log(curso);
        Curso.delete({id: curso._id},
            buscaCursos,
            function(erro){
                console.log("Não foi possível");
                console.log(erro);
                $scope.mensagem = {texto: "não foi possivel"};
            });
    };
}); 