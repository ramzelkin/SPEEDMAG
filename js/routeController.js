//controller
function RouteController() {
   var mainController = null;
   var self = this;
   this.start = function(controller, enter) {
       mainController = controller;
       enter.addEventListener('click', goToLoginPage, false);
   }

   var goToLoginPage = function() {
      mainController.initPageLogin();
   }

}
