var s,
module = {

  setting: {
    switchBtn : document.getElementById("switch-btn"),
    switchStatus : document.getElementById("switch-status"),
    hideMsg : document.getElementById("hide-msg"),
    property : document.getElementById("switchboard"),
    checkBox : document.getElementById("capture-checkbox"),
  },

  init: function(){
    s = this.setting;
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.switchBtn.addEventListener("click", function(){
      module.modifyBackground()
    });
    s.checkBox.addEventListener("click",function(){
      module.buttonBackground()
    });
  },

  modifyBackground: function() {
    if (s.property.className != 'toggled') {
      s.property.style.backgroundColor = "grey";
      s.switchStatus.innerHTML = "Switch is On";
      module.startTimer();
      s.hideMsg.style.display = "block";
      module.changeBgColor("gray","pink");
      s.property.className = 'toggled';
    }
    else {
      s.property.style.backgroundColor = "red";
      s.switchStatus.innerHTML = "Switch is Off";
      module.startTimer();
      s.hideMsg.style.display = " none";
      module.changeBgColor("pink","gray");
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
    if (s.checkBox.checked)
      s.switchBtn.style.backgroundColor = "green";
    else
      s.switchBtn.style.backgroundColor = "yellow";
  },

  hideMessage: function() {
    s.hideMsg.style.display = "none";
  },

  startTimer: function() {
    window.setTimeout(module.hideMessage(), 5000);
  },
};

module.init()
