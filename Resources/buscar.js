window.onload = function()
{
  var button4 = Titanium.UI.createButton({
    id:'button4',
    title:'Buscar',
    height:20,
  });
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

