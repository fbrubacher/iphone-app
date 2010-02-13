//to add a button to the navbar, use this code

window.onload = function()
{
		// adjust height
		if (Titanium.Platform.name == 'android')
		{
			document.getElementById('picker').style.height="120px";
		}
		else
		{
			document.getElementById('picker').style.height="217px";

		}

		var data = [];

		// support title attribute
		var col1 = {width:100,data:[
		    {title:'Romanticos', selected:true,fontSize:10},
		    {title:'Para ir con amigos',fontSize:10},
		    {title:'De negocios',fontSize:10},
		    {title:'Para ninos',fontSize:10},

			]
		};

		// support html attribute (also supports selected attribute for initial value)
		var col2 = {width:100,data:[
		    {title:'A la brasa',fontSize:10},
		    {title:'Africana',fontSize:10},
		    {title:'Alemana',fontSize:10},
		    {title:'Americana',fontSize:10},
			]
		};

		var col3 = {width:100,data:[
		    {title:'Hasta 25e',fontSize:10},
		    {title:'De 26 a 35e',fontSize:10},
		    {title:'De 36 a 60e',fontSize:10},
		    {title:'Mas de 60e',fontSize:10},
			]
		};
		// add columns to array
		data.push(col1);
		data.push(col2);
		data.push(col3);

    var button4 = Titanium.UI.createButton({
      id:'button4',
      title:'Buscar',
      height:20,
    });

    button4.addEventListener('click',function()
    {
      var win = Titanium.UI.createWindow({url:'resultadobusqueda.html',title:'Resultados'});
      win.open({animated:true});		
    });

		var picker = Titanium.UI.createPicker({id:'picker',data:data,selectionIndicator:true});
		picker.addEventListener('change', function(e)
		{
		//	document.getElementById('value').innerHTML = 'column ' + e.column + '<br/> row ' + e.row + '  value[1] ' + e.selectedValue[0] + ' value[2] ' + e.selectedValue[1];
		});

    picker.setData(data);
		var b = Titanium.UI.createButton({
			title:'Cambiar Geopos'
		});
		b.addEventListener('click',function()
		{
			var home_window = Titanium.UI.createWindow({url:'geopos.html',title:'Geopos'});
			home_window.open({animated:true});
		});
		Titanium.UI.currentWindow.setLeftNavButton(b);
};
    

