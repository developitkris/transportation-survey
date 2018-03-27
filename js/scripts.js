$(document).ready(function(){
  $("form#transport").submit(function(event){
    event.preventDefault();
    $("#work-response").show();
    $("input:checkbox[name=work]:checked").each(function(){
      var workTransport = $(this).val();
      $("#work-response").append(workTransport + "<br>");
    });

    $("#recreational-response").show();
    $("input:checkbox[name=recreation]:checked").each(function() {
      var recreationTransport = $(this).val();
      $("#recreational-response").append(recreationTransport + "<br>");
    });


    $("#transport").hide();
  });
});
