//model
function ListModel() {
   var myView = null;
   var self = this;
   var product;
   var listForMenu;
   this.start=function(view) {
      myView=view;
   }

   this.setProduct = function(_product) {
      product = _product;
      myView.updateAutocomplite();
   }
   this.getProduct = function() {
      return product;
   }

   this.setCategoriesAndProduct = function(listCategoriesWithProducts){
      listForMenu = listCategoriesWithProducts;
      myView.updateMenu();
   }
   this.getCategoriesAndProduct = function() {
      return listForMenu;
   }
}
