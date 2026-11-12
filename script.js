// $('body').css('background','black')



$('.logo img').click(()=>{
    $('body').toggleClass('black_theme')
    $('header').toggleClass('black_header')
})


$('#dialog1Btn').click(()=>{
    $('#dialog1').fadeIn()
})
$('#closeDialogBtn').click((e)=>{
    $(e.target).parent().parent().fadeOut()
})

 $("#searchInput").on("input", function() {
    var searchTerm = $(this).val().toLowerCase().trim();

    $(".pakalpojumu_kartites .card").filter(function() {
      var itemText = $(this).text().toLowerCase();
      // Toggle visibility: true shows the element, false hides it
      $(this).toggle(itemText.indexOf(searchTerm) > -1);
    });
  });