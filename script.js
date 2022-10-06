$(document).ready(function(){
    		//Ponemos nuestro Codio JavaScript que utiliza jQuery//
    		configurarInicio();//Metodo
          $('.myicono').click(function(e){

          	$('#navbar ul').toggleClass('lista-sm');//Muestra la lista al oprimir el Icono// 		   

	  	})//Llamamos una Clase y creamos un evento
      
      function configurarInicio(){
      	var urlPath = window.location.pathname;//Url De donde nos encontramos.
      	console.log(urlPath);
      	$('nav a').each(function(){
      		//console.log($(this)); Muestra la ruta del donde estamos//
      		var href = $(this).attr('href');
            console.log(href);//Mostramos los valores por consola//
            //Nos Muetra la pagina en la que estamos//
            var inidice = urlPath.length - href.length;
            //console.log(indice);
            console.log(urlPath.substring(indice));
            if(urlPath == href){
            	console.log('match');
            //Muestra cual es la pagina que esta activa//
      		}
      	  })
        }
	  })