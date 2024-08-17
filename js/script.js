$(document).ready(function () {
    // Carrossel Slick
    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    })

    // Menu Toggle
    $('.menu-hamburger').click(function () {
        $('#menu').slideToggle()
    })

    //tenho interesse
    $('.tenho-inter').click(function () {
        // Captura o título do produto
        let produtoInteresse = $(this).siblings('h3').text()
        // Adiciona o texto ao campo de mensagem do formulário
        $('#mensagem').val('Tenho interesse no ' + produtoInteresse)
        // Rolagem até a seção de contato para facilitar o envio do formulário
        $('html, body').animate({
            scrollTop: $("#contato").offset().top
        }, 100)
    })

    // Validação de form telefone
    $('#tel').mask('(00)00000-0000')

    // Validação de form requiridos
    $('.content-form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },

        // Validação de form menssagens
        messages: {
            nome: {
                required: 'Preencha o campo nome'
            },
            email: {
                required: 'Preencha o campo e-mail',
                email: 'Preencha o campo e-mail com um formato válido'
            }
        }
    })

    // Retirar o comportamento do form
    $('.content-form').submit(function (event) {
        event.preventDefault()

        if ($('.content-form').valid()) {
            // Limpar o formulário
            this.reset()
        } else {
            alert('Corrigir o formulário')
        }
    })
})
