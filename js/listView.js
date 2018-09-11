//VIEW
function ListView() {
   var self = this;
   var myModel = null;

   this.start = function(model) {
      myModel = model;
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
      $('#searchProduct').autocomplete();

   }
}
