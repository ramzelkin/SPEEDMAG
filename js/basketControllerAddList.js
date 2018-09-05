//Controller
function BasketControllerAddList() {
   var self = this;
   var myModel = null;

   this.start = function(model, plus, trash) {
      myModel = model;
      plus.addEventListener('click', self.addList, false);
      // trash.addEventListener('click', self.removeList, false);
   }
   this.addList = function() {
      myModel.gotoKategory();
   }

}
