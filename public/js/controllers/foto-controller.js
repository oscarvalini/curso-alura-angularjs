angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, cadastroDeFotos, $routeParams) {
    $scope.foto = {}
    $scope.mensagem = ''

    if($routeParams.fotoId) {

        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto
        }, function(erro) {
            console.log(erro)
            $scope.mensagem = 'Não foi possível obter a foto'
        })
        // $http.get('v1/fotos/' + $routeParams.fotoId)
        // .success(function(foto) {
        //     $scope.foto = foto
        // })
        // .error(function(erro) {
        //     console.log(erro)
        //     $scope.mensagem = 'Não foi possível obter a foto'
        // })
    }
    $scope.submeter = function() {
        if($scope.formulario.$valid) {
            // if($scope.foto._id) {

                cadastroDeFotos.cadastrar($scope.foto)
                .then(function(dados) {
                    if(dados.inclusao) $scope.foto = {}
                    $scope.mensagem = dados.mensagem
                    //$scope.focado = true
                })
                .catch(function(dados) {
                    $scope.mensagem = dados.mensagem
                })

                // recursoFoto.update( { fotoId : $routeParams.fotoId }, $scope.foto, function() {
                //     $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso'
                // }, function(erro) {
                //     console.log(erro)
                //     $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo
                // } )

                // $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                // .success(function() {
                //     $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso'
                // })
                // .error(function(erro) {
                //     console.log(erro)
                //     $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo
                // })
            // }
            // else {
            //     $http.post('v1/fotos', $scope.foto)
            //     .success(function() {
            //         $scope.foto = {}
            //         $scope.mensagem = 'Foto cadastrada com sucesso'
            //     })
            //     .error(function(erro) {
            //         $scope.mensagem = 'Não foi possível cadastrar a foto'
            //         console.log(erro)
            //     })
            // }
            
        }
    }
})