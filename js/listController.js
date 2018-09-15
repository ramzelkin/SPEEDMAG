//Controller
function ListController() {
   var self = this;
   var myModel = null;
   var categoryService = new CategoryService();
   var mainController = null;
   this.start = function(model, сontroller, cross, selectProduct) {
      myModel = model;
      mainController = сontroller;
      categoryService.initController(self);
      categoryService.getCategories();
      cross.addEventListener('click',goToRoutePage,false);
      selectProduct.autocomplete({select: addProduct});
   }
    this.getInfoCategories = function(allCategoriesInfo){
      var categories = allCategoriesInfo.categories;
      var label = categories.reduce(function(result, category) {
            return result.concat(category.goods);
      }, []);
      myModel.setProduct(label);
      myModel.setCategoriesAndProduct(categories);
   }
   var goToRoutePage = function(){
      mainController.changeToRoutePage();
   }
   var addProduct = function(event, ui){
      var selectedProduct = null;
      var selectedProducts = myModel.getSelectedProducts();
      var products = myModel.getProduct();
      for (var i = 0; i < products.length; i += 1) {
         if (products[i].label == ui.item.value) {
            selectedProduct = products[i];
            break;
         }
      }
      if ((selectedProduct != null) && (selectedProducts.indexOf(selectedProduct) == -1)) {
         selectedProducts.push(selectedProduct);
         myModel.setSelectedProducts(selectedProducts);
      }
   }

}
