
    $(window).load(function(){
     
       //function get json data from URL and populate data in 2nd TAB or NEW tab

        $.getJSON("http://www.allpilotunion.com/wp-json/wp/v2/posts", function(result){
            $.each(result, function(i, field){
                $("#blog").append('<li><a href="#'+field.slug+'" class="item-link"><div class="item-content"><div class="item-inner"><div class="item-title">'+field.title.rendered+'</div></div> </div></a></li>');
                
                $("#blog-content").append('<div id="front-pages"><div data-page="'+field.slug+'" class="page cached"><div class="page-content"><div class="content-block"><p><a href="#" class="back"><i class="icon fa fa-chevron-left" aria-hidden="true"></i> Back</a> </p><p>'+field.content.rendered+'</p></div></div></div></div>');
            });    
        });
        
       

     //function get json data from URL and populate data in 1st TAB or APU tab its basicaly categories of allpilotunion.com

    $.getJSON("http://www.allpilotunion.com/wp-json/wp/v2/categories", function(result){
            $.each(result, function(i, cat){
                $("#front").append('<li><a href="#'+cat.slug+'" class="item-link"><div class="item-content"><div class="item-inner"><div class="item-title">'+cat.name+'</div></div> </div></a></li>');
                
                $("#front-content").append('<div data-page="'+cat.slug+'" class="page cached"><div class="page-content"><div class="content-block"><p><a href="#" class="back"><i class="icon fa fa-chevron-left" aria-hidden="true"></i> Back</a> </p><p>'+cat.description+'</p></div></div></div>');
            });
        });
            
    

	  //code for search bar on 2nd tab or NEW tab...
        $("#s").on("keyup click input", function () {
		if (this.value.length > 0) {
		  $(".item-link").show().filter(function () {
			return $(this).find('.item-title').text().toLowerCase().indexOf($("#s").val().toLowerCase()) == -1;
		  }).hide();
		}
		else {
		  $(".item-link").show();
		}
		});
  



  
    });


 







