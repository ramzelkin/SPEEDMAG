//Model
function LoginModel() {
   var myView = null;
   this.allUsers = []; //данные всех пользователей
   this.newPossibleUser;
   //правила валидации формы
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

   this.getLoginAndPassword = function() {
      myView.validateView();
   }


}
