$(document).ready(function(){
  console.log('sanity check');
  $('.name-submit').click(function(){
    var name = $('.name').val();
    $('.greeting').append(name);
  });
});
