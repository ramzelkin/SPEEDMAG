//Model
function RouteModel() {
   var routeView = null;
   var user;
   var self = this;
   var store = 0;
   var selectedCategories;
   var category;
   this.start = function(view) {
      routeView = view;

   }
   this.setUser = function(_user) {
      user = _user;
      routeView.updateUser();
   }
   this.getUser = function() {
      return user;
   }
   this.setStore = function(_store){
      store = _store;
      routeView.updateMapStore();
   }
   this.getStore = function() {
      return store;
   }
   this.setSelectedCategories = function(categories) {
      selectedCategories = categories;
      routeView.updateSelectedCategories();
   }
   this.getSelectedCategories = function() {
      return selectedCategories;
   }
   this.setHighlightedCategory = function(_category){
      category = _category;
      routeView.updateHighlightedCategories();
   }
   this.getHighlightedCategory = function() {
      return category;
   }
}
