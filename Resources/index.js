//to add a button to the navbar, use this code

window.onload = function()
{
  // EXAMPLE 1. CREATE TABLEVIEW FROM STATIC DATA
  // data for tableview
  var data = [
      {title:'The Flintstones'},
      {title:'The Jetsons'},
      {title:'Scooby Doo'},
      {title:'Thundar the Barbarian'}
  ];

  // tableview object
  var tableView = Titanium.UI.createTableView({data:data,title:'Tableview Test'}, function(eventObject) 
  {
      // Now call some eventhandler function to handle the click event object
      // Took this from the Kitchen Sink
      var a = Titanium.UI.createAlertDialog();
      a.setTitle('Table View Test');
      a.setMessage('row ' + eventObject.row + ' index ' + eventObject.index + ' section ' + eventObject.section + ' rowData ' + eventObject.rowData);
      a.show(); 

  });
  var compositeView = Titanium.UI.createCompositeView();
  compositeView.addView(tableView,{left:0,top:0,height:52});
	var b = Titanium.UI.createButton({
    title:'Cambiar Geopos'
  });
  b.addEventListener('click',function()
  {
    var home_window = Titanium.UI.createWindow({url:'geopos.html',title:'Geopos'});
    home_window.open({animated:true});		

  });
  Titanium.UI.currentWindow.setLeftNavButton(b);
  Titanium.UI.currentWindow.addView(compositeView);
  Titanium.UI.currentWindow.showView(compositeView);
  


    
};
