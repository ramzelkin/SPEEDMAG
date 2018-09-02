function LoginModel() {

   //валидация формы
   function getLogin AndPassword() {
      $('#formLoginAndPass').validate({
         rules: {
            loginInput: { required: true, min: 3, max: 10 },
            passwordInput: { required: true }
         }
         messages: {
            loginInput: {
               required: "Необходимо ввести логин!",
               min: 'Логин должен содержать больше 3 символов!',
               max: 'Логин не должен превышать 10 символов!'
            },
            passwordInput: {
               required: "Необходимо ввести пароль!"
            }
         }
      });
   }

}
