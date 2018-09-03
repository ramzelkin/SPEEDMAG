//Model
function LoginModel() {
   var myView = null;
   this.rules = {
      loginInput: { required: true, minlength: 3, maxlength: 10 },
      passwordInput: { required: true }
   };
   this.messages = {
      loginInput: {
         required: "Необходимо ввести логин!",
         minlength: "Логин должен содержать больше 3 символов!",
         maxlength: "Логин не должен превышать 10 символов!"
      },
      passwordInput: {
         required: "Необходимо ввести пароль!"
      }
   };
   var self = this;
   this.start=function(view) {
      myView=view;
   }

   var updateView=function() {
      if ( myView )
         myView.update();
   };


   //правила валидации формы
   this.getLoginAndPassword = function() {
      updateView();
   }

}
