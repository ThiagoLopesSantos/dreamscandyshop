$(document).ready(function() {
    
    //Função para mostrar o menu extra contido em bebidas
    $('#sb-menu').click(function() {
        $('.submenu').slideToggle();
    });
    
    /*$('.submenu > #extra-menu').click(function() {
        $('#submenu-bebidas').slideToggle();
    });*/

    $('#extra-menu').click(function(event) {
        event.stopPropagation(); // Evita que o evento se propague para o menu principal
        $('#submenu-bebidas').slideToggle();
    });
    


    $('form').validate({
        rules: {
            name: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            name: '<span class="ms-error">*</span>Preencher',
            telefone: '<span class="ms-error">*</span>Preencher',
            email: '<span class="ms-error">*</span>Preencher corretamente',
            mensagem: '<span class="ms-error">*</span>Preencher'
        }
        
    });    


    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });



});