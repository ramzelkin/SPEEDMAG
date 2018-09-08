//view
function MainView() {
   this.loginView = new LoginView();
   var myModel;
   var myController;

   this.start = function(model, controller) {
      myModel = model;
      myController = controller;
   }
}
