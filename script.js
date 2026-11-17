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

//   Fona kustināšana

function moveBackground(pikseli,sekundes){
    let section = $('#galvena');

    let x = (Math.random()*pikseli).toFixed(0);
    let y = (Math.random()*pikseli).toFixed(0);

    section.css('background-position',`${x}px ${y}px`); 
    section.css('transition',`${sekundes}s linear`);  

}

setInterval(()=>{moveBackground(100,5)},5000);



$("#contactForm").validate({
    rules:{
        name:"required",
        email:{
                required:true,
                email:true
            },
        message:{
            required:true,
            minlength: 5

        }    
    },
    messages: {
         name:"Ierakstiet savu vārdu",
         email:"Ierakstiet savu epastu",
         message:"Ierakstiet ziņu"
    }    

})

