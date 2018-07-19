var s,
module = {

  setting: {
    switchStatus : $("#switch-status"),
    hideMsg : $("#hide-msg"),
    property : $("#switchboard"),
    switchBtn : $("#switch-btn"),
    checkBox : $("#capture-checkbox"),
    color1 : "gray",
    color2 : "pink",
  },

  init: function(){
    s = this.setting;
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.switchBtn.on("click", function(){
      module.modifyBackground()
    });
    s.checkBox.on("click",function(){
      module.buttonBackground()
    });
  },

  modifyBackground: function() {
    if (s.property.className != 'toggled') {
      s.property.css( "background-color", "grey" );
      s.switchStatus.text( "Switch is On" );
      s.hideMsg.text( "Hello...!" );
      s.hideMsg.fadeIn('slow', function(){
        s.hideMsg.delay(5000).fadeOut();
      });
      module.changeBgColor(s.color1,s.color2);
      s.property.className = 'toggled';
    }
    else {
      s.property.css( "background-color", "red" );
      s.switchStatus.text( "Switch is Off" );
      s.hideMsg.text( "" );
      module.changeBgColor(s.color2,s.color1);
      s.property.className = '';
    }
  },

  changeBgColor: function(color1,color2){
    var x = document.querySelectorAll("li");
    for (let i = 0; i < x.length; i++) {
      if (i%2 == 0)
        x[i].style.backgroundColor = color1;
      else
        x[i].style.backgroundColor = color2;
    }
  },

  buttonBackground: function() {
    $(":checkbox").change(function () {
    if (this.checked)
      s.switchBtn.css( "background-color", "green" );
    else
      s.switchBtn.css( "background-color", "yellow" );
    });
  },

};

$(document).ready(function () {
  module.init();
});