//VIEW
function BasketViewAddList() {

   var self = this;
   var myModel = null;
   this.addList;
   this.removeList;
   this.start = function(model) {
	     myModel = model;
        draw();
        self.addList = $('#addList')[0];
        console.log(self.addList);
        self.removeList = $('#removeList')[0];
   }

   function draw() {
         $('#mainForBasket').append('<p id="text">Чтобы добавить товары в список нажмите "+". Чтобы удалить список, нажмите значок корзины</p>');
         $('#mainForBasket').append('<div id="addList"></div>');
         $('#addList').append('<img src="./assets/images/plus.svg">');
         $('#mainForBasket').append('<div id="removeList"></div>');
         $('#removeList').append('<img src="./assets/images/trash.svg">');
         $('#mainForBasket').children().filter(function(index){
            return (this.id == 'addList') || (this.id == 'removeList')
         }).wrapAll('<div class="forFlex"></div>');
   }


   this.update = function() {
      alert('ok');
      //отрисовка категорий и jquery autocomplete

   }
}
