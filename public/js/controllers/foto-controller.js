angular.module('alurapic').controller('FotoController', function($scope, $http) {
    $scope.foto = {}

    $scope.submeter = function() {
        if($scope.fomulario.$valid) {
            $http.post('v1/fotos', $scope.foto)
            .success(function() {
                $scope.foto = {}
                $scope.mensagem = 'Foto cadastrada com sucesso'
            })
            .error(function(erro) {
                $scope.mensagem = 'Não foi possível cadastrar a foto'
                console.log(erro)
            })
        }
    }
})