window.onload = function()
{
  var a = Titanium.UI.createAlertDialog({title:'Grouped View Test', buttonNames:['OK']});

  var buttonData = [
      {title:'Button 1'},
      {title:'Button 2'}
  ];

  var buttonSection = Titanium.UI.iPhone.createGroupedSection({footer:'Button Group Footer', header:'Button Group', type:'button',data:buttonData});
  buttonSection.addEventListener('click',function(e)
  {
      a.setMessage('You clicked index ' + e.index + ' section row ' + e.row + ' section ' + e.section);
      a.show();
  });
  var a = Titanium.UI.createAlertDialog({title:'Grouped View Test', buttonNames:['OK']});

  var inputData = [
      {title:'Input 1', input:switchInstance, image:'iTunes.png'},
      {title:'Sound', input:sliderInstance, image:'Mail.png'},
      {title:'Name', input:textInstance},
      {title:'Input 2', value:'foo', hasChild:true},
      {title:'Input 3'}   
  ];

  var inputSection = Titanium.UI.iPhone.createGroupedSection({header:'Input Group', type:'input', data:inputData});
  inputSection.addEventListener('click',function(e)
  {
      a.setMessage('You clicked index ' + e.index + ' section row ' + e.row + ' section ' + e.section + ' rowData ' + e.rowData);
      a.show();
  });
  // create the grouped view
  var groupedView = Titanium.UI.iPhone.createGroupedView();
  groupedView.addSection(optionSection);
  groupedView.addSection(buttonSection);
  groupedView.addSection(inputSection);

  //to add a button to the navbar, use this code
  groupedView.setRightNavButton(bar);

  // add view to the window
  Titanium.UI.currentWindow.addView(groupedView);

  // show view
  Titanium.UI.currentWindow.showView(groupedView);
  
  

};

