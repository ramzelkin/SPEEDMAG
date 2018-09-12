//view
function RouteView() {
   var myModel = null;
   this.enter;
   var self = this;
   this.addlist;
   this.selectStore;

   this.start = function(model) {
         myModel = model;
         draw();
         self.enter = $('#user')[0];
         self.addList = $('#addList')[0];
         this.selectStore = $('#checkStore');
   }

   var draw = function() {
      $('#main').contents().remove();//перед отрисовкой очищаем экран от старой view
      $('#main').append('<div id="forPageRoute"></div>');
      $('#forPageRoute').append('<input type="button" id="user">');
      $('#user').button();
      $('#user').button('option','label','войти');
      $('#forPageRoute').append('<div class="empty"></div>');
      $('#forPageRoute').append('<input type="button" id="addList">');
      $('#addList').button();
      $('#addList').button('option','label','создать список');
      $('#forPageRoute').append('<select id="checkStore">');
      $('#checkStore').append('<option>выбрать магазин</option>');
      $('#checkStore').append('<option>магазин №1</option>');
      $('#checkStore').append('<option>магазин №2</option>');
      $('#checkStore').selectmenu();
      $('#checkStore').selectmenu({ position:{my:'left top',at:'left bottom',collision:'none'} });
      $('#forPageRoute').append('<div id="listAndMap"></div>');
      $('#listAndMap').append('<div id="list"><p id="text_list">Список покупок пуст</p></div>');
      $('#listAndMap').append('<div id="map"><p id="text_map">Карта магазина пуста. Выберите магазин, чтобы отобразить карту</p></div>');
   }
   this.updateUser = function() {
      var user = myModel.getUser();
      if (user) {
         $('#user').button('option','label',user.log);
         $('#user').button('disable');
      } else {
         $('#user').button('option','label','войти');
         $('#user').button('enable');
      }
   }

}
