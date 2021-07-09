angular.module('ifsp').controller('CursoController',
    function($scope, $routeParams, Curso){
        if ($routeParams.cursoId) {
            Curso.get({ id: $routeParams.cursoId },
                function (curso) {
                    $scope.curso = curso;
                },
                function (erro) {
                    $scope.mensagem = {
                        texto: 'Não foi possível'
                    };
                    console.log("$routeParams.cursoId");
                });
        }else{$scope.curso = new Curso();}

        $scope.salvaa = function(){
            $scope.curso.$save()
            .then(function() {
                $scope.mensagem = {texto: 'Salvo com sucesso'};
                //Limpar o formulário
                $scope.curso = new Curso();
            })
            .catch(function(erro){
                $scope.mensagem = {texto: 'Não foi possível salvar'};
            });
        };

    });
