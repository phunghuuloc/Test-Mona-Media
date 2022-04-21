$(document).ready(function() {
    $("#departure").flatpickr({
        altInput: true,
        altFormat: "D, j F, Y",
        dateFormat: "Y-m-d",
        minDate: "today",
        defaultDate: "today",
        onChange: function(){
            $("#return").flatpickr({
                defaultDate: $("#departure").val(),
                minDate: $("#departure").val(),
            });
        }
    });
    $("#return").flatpickr({
        altInput: true,
        altFormat: "D, j F, Y",
        dateFormat: "Y-m-d",
        defaultDate: "today",
        minDate: $("#departure").val(),
    });


    $(window).scroll(function(){
        let value = this.window.scrollY;

        if(value > 0) {
          $("#header").addClass("toggle-header");
        }else {
          $("#header").removeClass("toggle-header");
        }
      });
    
});