//model
function ListModel() {
   var myView = null;
   var self = this;
   var product;
   var listForMenu;
   var selectedProducts = [];
   var loading = false;
   this.start=function(view) {
      myView=view;
   }

   this.setProduct = function(_product) {
      product = _product;
      if (myView) {
         myView.updateAutocomplite();
      }
   }

   this.getProduct = function() {
      return product;
   }

   this.setCategoriesAndProduct = function(listCategoriesWithProducts){
      listForMenu = listCategoriesWithProducts;
      if (myView) {
         myView.updateMenu();
      }
   }

   this.getCategoriesAndProduct = function() {
      return listForMenu;
   }

   this.setSelectedProducts = function(_selectedProduct){
      selectedProducts = _selectedProduct;
      if (myView) {
         myView.updateList();
      }
   }

   this.getSelectedProducts = function() {
      return selectedProducts;
   }

   this.getLoading = function() {
      return loading;
   }

   this.setLoading = function(_loading){
      loading = _loading;
      if (myView) {
         myView.updateLoader();
      }
   }
   
}
