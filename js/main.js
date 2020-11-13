// rolagem do menu

// function menuScroll() {
//     const sections = document.querySelectorAll('section')
//     const li = document.querySelectorAll('.header_menu ul li a')
//     const windowTop = window.pageYOffset + 92;

//     if (windowTop > sections[0].offsetTop) {
//         li[0].classList.add('active');
//     } else {
//         li[0].classList.remove('active');
//     }
        

//     if (windowTop > sections[1].offsetTop) {
//         for(let i = 0; i < li.length; i++) {
//             li[i].classList.remove('active')
//         }
//         li[1].classList.add('active')
//     } else {
//         li[1].classList.remove('active')
//     }


//     if (windowTop > sections[2].offsetTop) {
//         for(let i = 0; i < li.length; i++) {
//             li[i].classList.remove('active')
//         }
//         li[2].classList.add('active')
//     } else {
//         li[2].classList.remove('active')
//     }


//     if (windowTop > sections[3].offsetTop) {
//         for(let i = 0; i < li.length; i++) {
//             li[i].classList.remove('active')
//         }
//         li[3].classList.add('active')
//     } else {
//         li[3].classList.remove('active')
//     }

// }

// menuScroll();

// addEventListener('scroll', menuScroll)

// --------------------------------------------

$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
    pager: false,           // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    prevText: "Previous",   // String: Text for the "previous" button
    nextText: "Next",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "rslides",   // String: Change the default namespace used
    before: function(){},   // Function: Before callback
    after: function(){}     // Function: After callback
  });



  $(".rslides_portifolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
  });

  //------------------------------------------------------------------------------


Visibility.onVisible(function(){
    setTimeout(function () {
        $("#introducao h1").addClass("animated fadeInDown")
    }, 400);

    setTimeout(function () {
        $("#introducao blockquote").addClass("animated fadeInDown")
    }, 800);

    setTimeout(function () {
        $("#introducao a").addClass("animated fadeInDown")
    }, 1200);

    setTimeout(function () {
        $(".animar").addClass("animated fadeInDown")
    }, 1600);


    setTimeout(function () {
        $(".introducao-interna .container h1").addClass("animated fadeInDown")
    }, 400);

    setTimeout(function () {
        $(".introducao-interna .container p").addClass("animated fadeInDown")
    }, 800);

    setTimeout(function () {
        $(".animar-interno").addClass("animated fadeInDown")
    }, 1200);
});

// -------------------------------------------------------

$('.formphp').on('submit', function() {
	var emailContato = "valvesperricci@yahoo.com.br"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});