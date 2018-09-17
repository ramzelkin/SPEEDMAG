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
      categoryService.initController(self);//отправляем себя, чтобы categoryService сообщил о успехе(тогда getInfoCategories()) или неудаче
      myModel.setLoading(true);
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
      //успешный ответ от Categoriesservice
    this.getInfoCategories = function(allCategoriesInfo){
      myModel.setLoading(false);
      var categories = allCategoriesInfo.categories;
      var label = categories.reduce(function(result, category) {//добавляем все товары в пустой массив (чтобы были все товары без категорий)
            return result.concat(category.goods);
      }, []);
      myModel.setProduct(label);//чтобы autocomplete смог забрать список товаров(без категорий)
      myModel.setCategoriesAndProduct(categories);//чтобы menu смог забрать список категорий, товаров
      if (selectProductMenu) {//если menu отрисовалось...
         selectProductMenu.menu({select: addProductForMenu});
      }
      mainController.updateSelectedCategories();//оповещаем, чтобы отбразить на routepage
   }
   var goToRoutePage = function(){ //по нажатию на крестик
      mainController.changeToRoutePage();
   }
   //вызывается из menu autocomplete
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
      if (selectedProduct != null) {//если такой продукт у нас существует
         var filteredProducts = selectedProducts.filter(function(item, index, arr) {//проверка, чтобы не добавить товар дважды
            return item.id == selectedProduct.id;
         });
         for (var j = 0; j < selectedProducts.length; j += 1) {
            if (selectedProducts[j].id ==  selectedProduct.id) {
               delete selectedProducts[j]['unneeded'];//если юзер выьрал товар, который был зачеркнут -- сделать товар активным
               break;
            }
         }
         if (filteredProducts.length == 0) {
            selectedProducts.push(selectedProduct);
         }
         myModel.setSelectedProducts(selectedProducts);
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
   var readyList = function() {//по кнопке готово -- список нужен всем заинтересованным (routepage)
      mainController.updateList();
   }
   this.getError = function(error){//ошибка от categoryservis
      myModel.setLoading(false);
      alert(error);
   }

}
