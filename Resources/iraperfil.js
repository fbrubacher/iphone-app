window.onload = function()
{
  var currentFocus;
  
	var textfield = Titanium.UI.createTextField({
    id:'textfield',
    height:30,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
    keyboardToolbar:[clear,flexSpace,prev,fixSpace,next],
    keyboardToolbarColor: '#900',
    keyboardToolbarHeight: 40,
    width:300
  });

  textfield.addEventListener('focus',function()
  {
    currentFocus = textfield;
  });

};
