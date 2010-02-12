window.onload = function()
{
	var b = Titanium.UI.createButton({
    title:'Volver Home'
  });
  b.addEventListener('click',function()
  {
    var home_window = Titanium.UI.createWindow({url:'index.html',title:'Home'});
    home_window.open({animated:true});		

  });
  Titanium.UI.currentWindow.setRightNavButton(b);
};

