//controller
function RouteController() {
   var mainController = null;
   var myModel;
   var self = this;
   this.start = function(controller, model, enter, addList, selectStore, logout, readyProduct, clearListButton) {
       mainController = controller;
       myModel = model;
       enter.addEventListener('click', goToLoginPage, false);
       addList.addEventListener('click', goToListPage, false);
       selectStore.selectmenu({select: showStore});
       logout.addEventListener('click', logOut, false);
       readyProduct.addEventListener('click', productUnneded, false);
       clearListButton.addEventListener('click', clearList, false);
   }

   var goToLoginPage = function() {
      mainController.initPageLogin();
   }
   var goToListPage = function() {
      mainController.changeToListPage();
   }
   var showStore = function(event, ui){
      myModel.setStore(ui.item.index);
   }
   var logOut = function(){
      myModel.setUser(null);
      mainController.logOut();
   }
   var productUnneded = function(event) {
      var user = myModel.getUser();
      var id = event.target.id;
      if (user.list) {
         for (var i = 0; i < user.list.length; i += 1) {
            if (user.list[i].id == id) {
               user.list[i]['unneeded'] = true;
            }

         }
         myModel.setUser(user);
      }
      mainController.updateUnneededProducts();
   }
   var clearList = function() {
      var user = myModel.getUser();
      if (user.list) {
         user.list = user.list.filter(function(item, index, arr) {
            return !item['unneeded'];
         });
         myModel.setUser(user);
         mainController.updateUnneededProducts();
      }
   }
}
