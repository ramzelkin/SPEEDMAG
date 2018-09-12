//Controller
function ListController() {
   var self = this;
   var myModel = null;
   var categoryService = new CategoryService();

   this.start = function(model) {
      myModel = model;
      categoryService.initController(self);
      categoryService.getCategories();
   }
    this.getInfoCategories = function(allCategoriesInfo){
      var categories = allCategoriesInfo.categories;
      var label = categories.reduce(function(result, category) {
            return result.concat(category.goods);
      }, []);
      myModel.setProduct(label);
   }

}
