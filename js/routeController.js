//controller
function RouteController() {
   var mainController = null;
   var self = this;
   this.start = function(controller, enter, addList) {
       mainController = controller;
       enter.addEventListener('click', goToLoginPage, false);
       addList.addEventListener('click', goToListPage, false);
   }

   var goToLoginPage = function() {
      mainController.initPageLogin();
   }
   var goToListPage = function() {
      mainController.changeToListPage();
   }

}
