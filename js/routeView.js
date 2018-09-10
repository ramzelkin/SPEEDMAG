//view
function RouteView() {
   var myModel = null;
   this.start = function(model) {
         myModel = model;
         draw();
   }
   var draw = function() {
      $('<body>').contents().remove();
      $('#main').append('<div id="user">user</div>');
      $('#main').append('<div class="empty"></div>');
      $('#main').append('<input type="button" id="addList">');
      $('#addList').button();
      $('#addList').button('option','label','создать список');
      // $('#main').append('<label for="checkStore">выбрать магазин</label>');
      // $('#main').append('<br>');
      $('#main').append('<select id="checkStore">');
      $('#checkStore').append('<option> магазин 1 </option>');
      $('#checkStore').append('<option> магазин 2 </option>');
      $('#checkStore').selectmenu();
      $('#checkStore').selectmenu({ position:{my:'left top',at:'left bottom',collision:'none'} });

      $('#main').append('<div id="listAndMap"></div>');
      $('#listAndMap').append('<div id="list"><p id="text_list">Список покупок пуст</p></div>');
      $('#listAndMap').append('<div id="map"><p id="text_map">Карта магазина пуста. Выберите магазин, чтобы отобразить карту</p></div>');



   }
}
