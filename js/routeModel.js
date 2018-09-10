//Model
function RouteModel() {
   var routeView = null;
   var user;
   var self = this;
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
}
