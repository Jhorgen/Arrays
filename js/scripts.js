$(document).ready(function(){
  $("#form").submit(function(event) {
    var i=0;
    event.preventDefault();
    var list = [$('#item1').val().toUpperCase(),$('#item2').val().toUpperCase(), $('#item3').val().toUpperCase(), $('#item4').val().toUpperCase()];
    list.sort();
    list.forEach(function(li){

      console.log(list);
      var n = i.toString();
      $("#li" + n).append(li);
      i++;
    });
    $("#form").hide();
  });
});
