//Controller
function ListController() {
   var self = this;
   var myModel = null;
   var categoryService = new CategoryService();

   this.start = function(model) {
      myModel = model;
      categoryService.initController(self);
   }
   this.getInfoCategories = function(allCategoriesInfo){
      myModel.allCategoriesAndProduct = allCategoriesInfo;
   }
}
