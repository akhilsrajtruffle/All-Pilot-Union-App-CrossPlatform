// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;






var mainView = myApp.addView('.view-main', {
    domCache: true //enable inline pages
});

var mainVieww = myApp.addView('.view-mainn', {
    domCache: true //enable inline pages
});


// Pull to refresh content insta gram feed
var instaContent = $$('.instafeed-content');
 
// Add 'refresh' listener on it
instaContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
       
       $( "#instafeed" ).empty();
        var feed = new Instafeed({
    get: 'tagged',
    tagName: 'apu',
        resolution:'low_resolution',
    clientId: '3dd246e14b1746968f31998c42d7cb0a',
    accessToken: '200446713.3dd246e.95da3a967db24ebe8d6033bced72d82b',
    template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a>'
    });
      
    feed.run();
        
                
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});


// Pull to refresh content Blog /News Feed
var blogContent = $$('.blog-cont');
 
// Add 'refresh' listener on it
blogContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
       
       $( "#front-pages" ).empty();
        $( "#blog" ).empty();
        $.getJSON("http://www.allpilotunion.com/wp-json/wp/v2/posts", function(result){
            $.each(result, function(i, field){
                $("#blog").append('<li><a href="#'+field.slug+'" class="item-link"><div class="item-content"><div class="item-inner"><div class="item-title">'+field.title.rendered+'</div></div> </div></a></li>');
                
                $("#blog-content").append('<div data-page="'+field.slug+'" class="page cached"><div class="page-content"><div class="content-block"><p><a href="#" class="back"><i class="icon fa fa-chevron-left" aria-hidden="true"></i> Back</a> </p><p>'+field.content.rendered+'</p></div></div></div>');
            });    
        });  
        
                
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});


// Pull to refresh content Front Page
var frontContent = $$('.front-cont');
 
// Add 'refresh' listener on it
frontContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
       
       $( "#front" ).empty();
        
        $.getJSON("http://www.allpilotunion.com/wp-json/wp/v2/categories", function(result){
            $.each(result, function(i, cat){
                $("#front").append('<li><a href="#'+cat.slug+'" class="item-link"><div class="item-content"><div class="item-inner"><div class="item-title">'+cat.name+'</div></div> </div></a></li>');
                
                $("#front-content").append('<div data-page="'+cat.slug+'" class="page cached"><div class="page-content"><div class="content-block"><p><a href="#" class="back"><i class="icon fa fa-chevron-left" aria-hidden="true"></i> Back</a> </p><p>'+cat.description+'</p></div></div></div>');
            });
        });
                
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});


