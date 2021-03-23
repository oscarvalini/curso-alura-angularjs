/* 
    As diretivas precisam ser criadas em um módulo separado. Utilizamos a função directive
    para declarar uma diretiva, passando o nome da diretiva e um função de callback que configura
    a diretiva.
*/
angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

    /* Obrigatoriamente temos que utilizar o padrão camelCase para nomear a diretiva
    como 'meuPainel' por exemplo, e ao utilizar a diretiva, trocamos o camelCase por hífen 
    como separador  com todas as letras minusculas, como <meu-painel> por exemplo.

    Quando criamos uma diretiva no angular sempre precisamos retornar um DDO */

    var ddo =  {}

    //restrict pode ser 'A' (Attribute), 'E' (Element) ou 'AE' (as duas opções)
    ddo.restrict = 'AE'
    /* A diretiva como atributo poderia ser utilizada da seguinte forma: 
        
        <div meu-painel></div> 
    
    Como Elemento seria usado da seguinte forma:

        <meu-painel></meu-painel>
    */

    /**
     * scope define o escopo da diretiva e o nome do atributo que receberá o parâmetro.
     * Por exemplo,em ddo.scope = {titulo: @titulo}, a diretiva será utilizada passando o parâmetro
     * titulo -> <meu-painel titulo="Foto 1"></meu-painel>
     * No entando, a convenção é de que nomeemos o parâmetro com o mesmo nome do atributo do 
     * nosso objeto ddo. Podemos colocar apenas o '@' como nome de parâmetro, assim o Angular
     * assume que o nome do parâmetro é mesmo nome do atributo do objeto scope e deve ser passado
     * como string.
     */
   ddo.scope = {
       //titulo: '@titulo'
       titulo: '@'
   }

   /* Para mantermos o conteudo das tags que estão dentro da nossa diretiva precisamos utilizar
      o mecanismo de transclude, como demonstrado abaixo. No entanto, ainda precisamos indicar
      no template, onde extamente o conteudo será colocado utilizando o atributo ng-transclude.
    */
   ddo.transclude = true

   /* 
    Podemos escrever o nosso template dessa forma, diretamente no arquivo javascript da diretiva,
    ou podemos escrever o html em um arquivo externo e indicar para o angular qual é o caminho
    do arquivo html utilizando o atributo ddo.templateUrl

    ddo.template =
            '<div class="panel panel-default">'
        +   '   <div class="panel-heading">'
        +   '       <h3 class="panel-title">{{titulo}}</h3>'
        +   '   </div>'
        +   '   <div class="panel-body" ng-transclude>'
        +   '   </div>'
        +   '</div>' 
    */
    ddo.templateUrl = 'js/directives/meu-painel.html'

    return ddo

})
.directive('minhaFoto', function() {
    var ddo = {}

    ddo.restrict = 'AE'

    ddo.scope = {
        url: '@',
        titulo: '@'
    }

    ddo.templateUrl =  'js/directives/minha-foto.html'

    return ddo
})

.directive('meuBotaoPerigo', function() {
    var ddo = {}
    ddo.restrict = 'E'
    ddo.scope = {
        nome: '@',
        acao: '&'
    },
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'
    
    return ddo
})
.directive('meuFocus', function() {
    
    var ddo = {}

    // ddo.restrict = "A"
    // ddo.scope = {
    //     focado: '='
    // }

    ddo.link = function(scope, element) {
        scope.$on('fotoCadastrada', function() {
            element[0].focus()
        })
        /* scope.$watch('focado', function() {
            if(scope.focado) {
                element[0].focus()
                scope.focado = false
            }
        }) */
    }

    return ddo
})