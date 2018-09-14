//Controller
function ListController() {
   var self = this;
   var myModel = null;
   var categoryService = new CategoryService();
   var mainController = null;
   this.start = function(model, сontroller, cross) {
      myModel = model;
      mainController = сontroller;
      categoryService.initController(self);
      categoryService.getCategories();
      cross.addEventListener('click',goToRoutePage,false);
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

}
