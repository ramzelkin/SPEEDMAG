//model
function MainModel() {
   var myView;
   this.loginModel = new LoginModel();
   this.routeModel = new RouteModel();
   this.listModel = new ListModel();
   this.start=function(view) {
      myView=view;
   }
   var modelState = {};

   this.setModelState = function(state) {
      modelState = state;
      myView.update();
   }
   this.getModelState = function() {
      return modelState;
   }


}
