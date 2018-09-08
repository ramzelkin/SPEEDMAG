//model
function MainModel() {
   var myView;
   this.loginModel = new LoginModel();

   this.start=function(view) {
      myView=view;
   }
}
