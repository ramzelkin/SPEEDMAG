//Controller
function ListController() {
   var self = this;
   var myModel = null;
   var categoryService = new CategoryService();
   var mainController = null;
   var selectProductMenu;
   this.start = function(model, сontroller, cross, selectProduct, _selectProductMenu, trash) {
      myModel = model;
      mainController = сontroller;
      categoryService.initController(self);
      categoryService.getCategories();
      cross.addEventListener('click',goToRoutePage,false);
      selectProduct.autocomplete({select: addProductForAutocomplete});
      selectProductMenu = _selectProductMenu;
      trash.addEventListener('click',deleteItem,false);
   }

    this.getInfoCategories = function(allCategoriesInfo){
      var categories = allCategoriesInfo.categories;
      var label = categories.reduce(function(result, category) {
            return result.concat(category.goods);
      }, []);
      myModel.setProduct(label);
      myModel.setCategoriesAndProduct(categories);
      selectProductMenu.menu({select: addProductForMenu});
   }
   var goToRoutePage = function(){
      mainController.changeToRoutePage();
   }
   var addProduct = function(value){
      var selectedProduct = null;
      var selectedProducts = myModel.getSelectedProducts();
      var products = myModel.getProduct();
      for (var i = 0; i < products.length; i += 1) {
         if (products[i].label == value) {
            selectedProduct = products[i];
            break;
         }
      }
      if ((selectedProduct != null) && (selectedProducts.indexOf(selectedProduct) == -1)) {
         selectedProducts.push(selectedProduct);
         myModel.setSelectedProducts(selectedProducts);
      }
   }
   var addProductForAutocomplete = function(event, ui) {
      addProduct(ui.item.value);
   }
   var addProductForMenu = function(event, ui) {
      addProduct(ui.item[0].id);
   }
   var deleteItem = function(event){

   }


}
