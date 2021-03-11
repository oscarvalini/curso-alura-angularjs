angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

    //Essa configuração ativa o módulo do HTML5 que trabalha com rotas. Na práticam utilizando
    //essa configuração deixamos de usar a "#" na url do nosso navegador. Para que esse módulo
    //seja habilitado, o backend também precisa estar preparado.
    
    $locationProvider.html5Mode(true)

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    })

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'   
    })

    $routeProvider.otherwise({ redirectTo: '/fotos' })
})