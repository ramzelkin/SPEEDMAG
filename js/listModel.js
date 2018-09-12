//model
function ListModel() {
   var myView = null;
   var self = this;
   var product;
   this.start=function(view) {
      myView=view;
   }

   this.setProduct = function(_product) {
      product = _product;
      myView.updateAutocomplite();
   }
   this.getProduct = function() {
      return product;
   }
}
