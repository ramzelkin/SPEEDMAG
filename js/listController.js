//Controller
function ListController() {
   var self = this;
   var myModel = null;
   var categoryService = new CategoryService();
   var mainController = null;
   var selectProductMenu;
   this.start = function(model, сontroller, cross, selectProduct, _selectProductMenu, trash, readyButton) {
      myModel = model;
      mainController = сontroller;
      categoryService.initController(self);
      categoryService.getCategories();
      if (cross) {
         cross.addEventListener('click',goToRoutePage,false);
      }
      if (selectProduct) {
         selectProduct.autocomplete({select: addProductForAutocomplete});
      }
      if (_selectProductMenu) {
         selectProductMenu = _selectProductMenu;
      }
      if (trash) {
         trash.addEventListener('click',deleteItem,false);
      }
      if (readyButton) {
         readyButton.addEventListener('click',readyList,false);
      }
   }

    this.getInfoCategories = function(allCategoriesInfo){
      var categories = allCategoriesInfo.categories;
      var label = categories.reduce(function(result, category) {
            return result.concat(category.goods);
      }, []);
      myModel.setProduct(label);
      myModel.setCategoriesAndProduct(categories);
      if (selectProductMenu) {
         selectProductMenu.menu({select: addProductForMenu});
      }
      mainController.updateSelectedCategories();
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
      if (selectedProduct != null) {
         var filteredProducts = selectedProducts.filter(function(item, index, arr) {
            return item.id == selectedProduct.id;
         });
         if (filteredProducts.length == 0) {
            selectedProducts.push(selectedProduct);
            myModel.setSelectedProducts(selectedProducts);
         }
      }
   }
   var addProductForAutocomplete = function(event, ui) {
      addProduct(ui.item.value);
   }
   var addProductForMenu = function(event, ui) {
      addProduct(ui.item[0].id);
   }
   //удаляем выбранный продукт из списка
   var deleteItem = function(event){
      var selectedProducts = myModel.getSelectedProducts();
      selectedProducts = selectedProducts.filter(function(item, index, arr){
         return item.id != event.target.id;
      });
      myModel.setSelectedProducts(selectedProducts);
   }
   var readyList = function() {
      mainController.updateList();
   }


}
