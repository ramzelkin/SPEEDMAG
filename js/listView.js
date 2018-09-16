//VIEW
function ListView() {
   var self = this;
   var myModel = null;
   var myController = null;
   this.cross;
   this.selectProduct;
   this.selectProductMenu;
   this.trash;
   this.readyButton;

   this.start = function(model, сontroller) {
      myModel = model;
      myController = сontroller;
      drawPopap();
      this.cross = $('#imgClose')[0];
      this.selectProduct = $('#searchProduct');
      this.selectProductMenu = $('#menu');
      self.updateList();
      this.trash = $('#listProducts')[0];
      this.readyButton = $('#ready')[0];
   }
   var drawPopap = function() {
      $('title').text('Список продуктов');
      $('body').append('<div id="popapContainer"></div>');
      $('#popapContainer').append('<div id="layout"><img id="imgClose" src="./assets/images/close.svg"></div>');
      $('#popapContainer').append('<div id="popap"><div id ="content"></div></div>');
      $('#content').append('<input type="text" id="searchProduct">');
      $('#content').append('<ul id="menu"></ul>');
      $('#content').append('<table id="listProducts"></table>');
      $('#content').append('<input id="ready" type="submit" value="готово">');
      $('#ready').button();
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
            $('#'+categoryId).append('<li id="'+ categories[i].goods[j].label + '"><div>' + categories[i].goods[j].label + '</div></li>');
         }
      }
      $('#menu').menu();
   }
   this.updateList = function() {
      $('#listProducts').contents().remove();
      var products = myModel.getSelectedProducts();
      for (var i = 0; i < products.length; i += 1) {
         $('#listProducts').append('<tr><td><img id="'+ products[i].id +'" src="./assets/images/trash.svg"><td>'+products[i].label+'</td></td></tr>');
      }


   }
}
