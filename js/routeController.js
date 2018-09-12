//controller
function RouteController() {
   var mainController = null;
   var self = this;
   this.start = function(controller, model, enter, addList, selectStore) {
       mainController = controller;
       enter.addEventListener('click', goToLoginPage, false);
       addList.addEventListener('click', goToListPage, false);
       selectStore.selectmenu({select: showStore});
   }

   var goToLoginPage = function() {
      mainController.initPageLogin();
   }
   var goToListPage = function() {
      mainController.changeToListPage();
   }
   var showStore = function(event, ui){
      if(ui.index==1) {

      }
   }
}
