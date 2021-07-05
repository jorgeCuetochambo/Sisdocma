$(document).ready(function(){
   $('li a:first').addClass('active');
   $('.content .tabs').hide();
   $('.content .tabs:first').show();

   $('li a').click(function(){
      $('li a').removeClass('active');
      $(this).addClass('active');
      $('.content .tabs').hide();

      var activeTab = $(this).attr('href');
      $(activeTab).show();
      return false
   });

});