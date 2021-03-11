//Parâmetros passados para a função de callback podem estar em ordem diferente. O que importa é o nome
angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = []

    $scope.filtro = ''
    /* $http é uma requisição assíncrona e devolve uma promise
    var promise = $http.get('v1/fotos')
    promise.then(function(retorno) { //retorno poderia ser outro nome
        $scope.fotos = retorno.data
    })
    .catch(function(error) {
        console.log(error)
    })

    Alternativamente as promises, podemos utilizar o método success e error  */

    $http.get('v1/fotos')
    .success(function(fotos) {
        $scope.fotos = fotos
    })
    .error(function(erro) {
        console.error(erro)
    })
});