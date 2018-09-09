//view
function RouteView() {
   var myModel = null;
   this.start = function(model) {
         myModel = model;
         draw();
   }
   var draw = function() {
      $('#main').contents().remove();
      $('#main').append('<p>все получилось</p>');
   }
}
