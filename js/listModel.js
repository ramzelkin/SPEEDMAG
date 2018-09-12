//model
function ListModel() {
   var myView = null;
   var self = this;
   
   this.start=function(view) {
      myView=view;
   }

   this.allCategoriesAndProduct = [];
}
