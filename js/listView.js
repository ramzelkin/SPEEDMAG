//VIEW
function ListView() {
   var self = this;
   var myModel = null;
   var myController = null;
   this.cross;

   this.start = function(model, сontroller) {
      myModel = model;
      myController = сontroller;
      drawPopap();
      this.cross = $('#imgClose')[0];
   }
   var drawPopap = function() {
      $('title').text('Список продуктов');
      // $('#content').contents().remove();
      $('body').append('<div id="popapContainer"></div>');
      $('#popapContainer').append('<div id="layout"><img id="imgClose" src="./assets/images/close.svg"></div>');
      $('#popapContainer').append('<div id="popap"><div id ="content"></div></div>');
      $('#content').append('<input type="text" id="searchProduct">');
      $('#content').append('<ul id="menu"></ul>');
   }
   this.updateAutocomplite = function(){
      var goods = myModel.getProduct();
      $('#searchProduct').autocomplete();
      $('#searchProduct').autocomplete({
         source: goods,
         dataType: "json",
         autoFocus: true
      });
   }

   // this.updateMenu = function() {
   //    var products =
   //    $('#menu').menu();
   //    $('#menu').menu(
   //
   //    );
   // }
}
