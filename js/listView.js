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
         minLength: 2,
         source: goods,
         dataType: "json",
         autoFocus: true
      });
   }

   this.updateMenu = function() {
      var categories = myModel.getCategoriesAndProduct();
      for (var i = 0; i < categories.length; i += 1) {
         var categoryId = "category_" + categories[i].id
         $('#menu').append('<li><div>' + categories[i].name + '</div><ul id="' + categoryId + '" ></ul></li>');
         for (var j = 0; j < categories[i].goods.length; j += 1) {
            $('#'+categoryId).append('<li><div>' + categories[i].goods[j].label + '</div></li>');
         }
      }
      $('#menu').menu();
   }
}
