//VIEW
function LoginView() {

   var self = this;
   var myModel = null;
   this.submit;
   this.start = function(model) {
			myModel = model;
         drawInput(); //отрисовка формы валидации
         self.submit = $('#submitInput')[0];
         console.log(self.submit);
   }

   function drawInput() {
      $('#main').append('<form id="formLoginAndPass">');
      $('#formLoginAndPass').append('<p>Введите логин</p>');
      $('#formLoginAndPass').append('<input type="text" id="loginInput" name="loginInput" value="">');
      $('#formLoginAndPass').append('<p>Введите пароль</p>');
      $('#formLoginAndPass').append('<input type="text"  id="passwordInput" name="passwordInput" value="">');
      $('#formLoginAndPass').append('<input type="submit" id="submitInput" value="отправить">');
   }



}
