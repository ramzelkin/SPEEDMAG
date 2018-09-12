//VIEW
function ListView() {
   var self = this;
   var myModel = null;
   var myController = null;

   this.start = function(model, сontroller) {
      myModel = model;
      myController = сontroller;
      drawPopap();
   }
   var drawPopap = function() {
      $('body').append('<div id="popap"><div id ="content"></div></div>');
      $('#content').contents().remove();
      $('body').append('<div id="layout"><img id="imgClose" src="./assets/images/close.svg"></div>');
      $('#popap').show();
      $('#layout').show().click(function(){
						$('#popap').hide();
						$('#layout').hide();
					});
      $('#content').append('<input type="text" id="searchProduct">');

      $('#content').append('<div id="menu"></div>');
      $('#menu').menu();
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
}
