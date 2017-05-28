$(document).ready(function()
{
	var $headerMenuElements = $('#headerMenu a');
	$headerMenuElements.hover(function()
	{	
		$(this).children().addClass('activeHeaderMenuText');
		$(this).addClass('activeHeaderMenuElement');
	},
	function()
	{
		$headerMenuElements.children().removeClass('activeHeaderMenuText');
		$headerMenuElements.removeClass('activeHeaderMenuElement');
	})

    $headerMenuElements.click( function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href');
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).position().top;
            // console.log($(id).position().top);
        //анимируем переход на расстояние - top
        $('body,html').animate({scrollTop: top}, 1000);
    })

    $('#icon-menu').click(function()
    {
        $('.menu').toggleClass('active');
    })


	$('.tabs .tab').hover(function()
	{
		$('.tabs .tab').removeClass('active');
		$(this).addClass('active');	
		var index =$(this).index();
		$('.texts .text').hide();
        $('.texts .text').eq(index).toggle();
        var text = $('.texts .text').eq(index); 
        $('.texts button').remove();
        text.after("<button class='button'>DOWNLOAD</button>");
	})

 $('#form-login input#name, #form-login input#email, #form-login input#password').unbind().blur( function()
 {
 	var id = $(this).attr('id');
 	var val = $(this).val();

 	switch(id)
 	{
 		case 'name':
 		var rv_name = /^[a-zA-Zа-яА-Я]+$/;
        if(val.length > 2 && val != '' && rv_name.test(val))
            {
               $(this).removeClass('error');
            }
        else
        	{
        		$(this).addClass('error');	
        	}
 			break
 		case 'email':
 		var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if(val != '' && rv_email.test(val))
            {
               $(this).removeClass('error');
            }
        else
        	{
        		$(this).addClass('error');	
        	}
 			break
  		case 'password':
 		    if(val != '')
            {
               $(this).removeClass('error');
            }
        else
        	{
        		$(this).addClass('error');	
        	}
 			break
    }
 	})

 $('.social-media .right-column img, .footer .social-web img').hover(function()
 {
 	var src = $(this).attr('src');
 	src = src.match(/\w{0,}\d{0,}\./);
    src = src.join('');
    src = src.slice(0,src.length-1);
 	
    $(this).attr('src', 'img/'+src+'-2.png');
 },function()
 {
 	var src = $(this).attr('src');
    src = src.slice(4,);
    src = src.match(/\w{1,2}\d{0,1}/);
 	$(this).attr('src','img/'+src+'.png');
 })

 $('.list').hover(function()
 {
    $(this).animate(
    {
        marginTop:"40px"
    },250);
 },function()
 {
    $(this).animate(
    {
        marginTop:"70px"
    },250);
 })

 $('button').hover(function()
 {
    $(this).addClass('blackButton');
 },function()
 {
    $(this).removeClass('blackButton');
 })
})

