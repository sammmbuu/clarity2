var InitLoad = function(){
  window.clarityModel = new ClarityModel();
  ko.applyBindings(window.clarityModel, document.getElementById("apply"));
};