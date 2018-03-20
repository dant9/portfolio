   
   $(document).ready(function()
   {
      $("a[href*='#gallery']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_gallery').offset().top }, 500, 'easeOutCubic');
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top }, 500, 'easeOutCubic');
      });
   });
   