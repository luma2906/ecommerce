$( document ).ready(function() {
     $.ajax({
     	url:"../zapato.json",
     	dataType: "json",
     	success:function(data){
     		console.log(data);
               $("#titulo1").text(data[0].nombre);
               $("#precio").text(data[0].precio);
               $("#imagenesP").attr("src","../img/"+data[0].foto);
             
             
               $.each( data, function( i, datos ){
                    if(datos.foto!="12.jpg"){
                         var ruta="../img/"
                         
                         var html="<a href='"+ruta+datos.foto+"'><img src='../img/"+datos.foto+"' ></a>";
                        
                         $("#slider").append(html);
                        
                    }         

               });
               for (var i = 0; i <4; i++) {
                  var html2='<div class="card" style="width: 18rem;">'+
                                '<img class="card-img-top" src="../img/'+data[0].foto+'" alt="Card image cap">'+
                                '<div class="card-body">'+
                                  '<h5 class="card-title" id="nombreslider2">'+data[0].nombre+'</h5>'+
                                  '<p class="card-text" id="precioslider2">'+data[0].precio+'</p>'+
                                  '<a href="#" class="btn btn-primary centrarbtn btn-lg" id="boton">Agregar al carrito</a>'+
                                '</div>'+
                              '</div>';
                    $("#slider1").append(html2);
               }

               for (var i = 0; i <4; i++) {
                  var html2='<div id="completar2">'+
                                   '<div class="card" style="width: 18rem;">'+
                                     '<img class="card-img-top" src="../img/'+data[i].foto+'" alt="Card image cap" width="200" height="200">'+
                                     '<div class="card-body">'+
                                       '<h5 class="card-title" id="nombreslider3">'+data[i].nombre+'</h5>'+
                                       '<p class="card-text" id="precioslider3">'+data[i].precio+'</p>'+
                                      
                                     '</div>'+
                                     '<hr>'+
                                   '</div>'+
                                   
                              '</div>';
                    $("#slider2").append(html2);
               }
                

                
                 
          


     	},
     	error:function(errores){
     		console.log(errores);

     	},
          complete:function(){
               cargar();
          }

     });
    
   

    function cargar(){
      $( '#slider' ).jGallery();
      }


    
    
});