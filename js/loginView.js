function LoginView() {
   //отрисовка input
   function drawInput() {
      $('#main').append('<p>Введите логин</p>');
      $('#main').append('<input type="text" id="loginInput" value="логин">');
      $('#main').append('<p>Введите пароль</p>');
      $('#main').append('<input type="text"  id="paswordInput" value="пароль">');
      $('#main').append('<input type="submit" id="submitInput" value="отправить">');
   }
   drawInput();
}
