window.onload = function()
{
  // EXAMPLE 1. CREATE TABLEVIEW FROM STATIC DATA
  // data for tableview
  var data = [
      {title:'Restaurant1'},
      {title:'Restaurant2'},
      {title:'Restaurant4'},
      {title:'Restaurant5'}
  ];

  // tableview object
  var tableView = Titanium.UI.createTableView({data:data,title:'Tableview Test'}, function(eventObject) 
  {
      var win = Titanium.UI.createWindow({url:'detalle.html',title:'Detalle'});
      win.open({animated:true});		
      // Now call some eventhandler function to handle the click event object
      // Took this from the Kitchen Sink
      //var a = Titanium.UI.createAlertDialog();
      //a.setTitle('Table View Test');
      //a.setMessage('row ' + eventObject.row + ' index ' + eventObject.index + ' section ' + eventObject.section + ' rowData ' + eventObject.rowData);
      //a.show(); 

  });
  var compositeView = Titanium.UI.createCompositeView();
  compositeView.addView(tableView,{left:0,top:0,height:200});
  Titanium.UI.currentWindow.addView(compositeView);
  Titanium.UI.currentWindow.showView(compositeView);
};
