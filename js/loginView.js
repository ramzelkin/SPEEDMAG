function LoginView() {

   //отрисовка формы валидации
   function drawInput() {
      $('#main').append('<form id="formLoginAndPass">');
      $('#main').append('<p>Введите логин</p>');
      $('#main').append('<input type="text" id="loginInput" name="loginInput" value="">');
      $('#main').append('<p>Введите пароль</p>');
      $('#main').append('<input type="text"  id="passwordInput" name="passwordInput" value="">');
      $('#main').append('<input type="submit" id="submitInput" value="отправить">');
   }
   drawInput();


}
