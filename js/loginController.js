//Controller
function LoginController() {

   var self = this;
   var myModel = null;

   this.start = function(model, submit) {
      myModel = model;
      submit.addEventListener('click', self.startClick, false);
   }
   //по клику данные формы валидируются
   this.startClick = function() {
      myModel.getLoginAndPassword();
   }
}
