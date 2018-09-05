//model
function BasketModelAddList() {
   var myView = null;

   this.start=function(view) {
      myView=view;
   }

   var updateView=function() {
      if ( myView )
         myView.update();
   }

   this.gotoKategory = function() {
      updateView();
   }
}
