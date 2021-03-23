//Parâmetros passados para a função de callback podem estar em ordem diferente. O que importa é o nome
angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {
    $scope.fotos = []
    $scope.filtro = ''
    $scope.mensagem = ''

    /*Um dos principais diferenciais de se utilizar $resource para fazer a requisição é que 
    Não precisamos passar a url */
    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos
    }, function(erro) {
        console.log(erro)
    })
    /* $http é uma requisição assíncrona e devolve uma promise
    var promise = $http.get('v1/fotos')
    promise.then(function(retorno) { //retorno poderia ser outro nome
        $scope.fotos = retorno.data
    })
    .catch(function(error) {
        console.log(error)
    })

    Alternativamente as promises, podemos utilizar o método success e error  */

    // $http.get('v1/fotos')
    // .success(function(fotos) {
    //     $scope.fotos = fotos
    // })
    // .error(function(erro) {
    //     console.error(erro)
    // })

    //remove uma foto
    $scope.remover = function(foto) {

        recursoFoto.delete({fotoId : foto._id}, function() {
            var indiceFoto = $scope.fotos.indexOf(foto)
            $scope.fotos.splice(indiceFoto, 1)
            $scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso!"
        }, function(erro) {
            console.log(erro)
            $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo
        });

        // $http.delete('v1/fotos/' + foto._id)
        // .success(function() {
        //     var indiceFoto = $scope.fotos.indexOf(foto)
        //     $scope.fotos.splice(indiceFoto, 1)
        //     $scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso!"
        // })
        // .error(function(erro) {
        //     console.log(erro)
        //     $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo
        // })
    }
});