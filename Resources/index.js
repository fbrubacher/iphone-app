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

		var picker = Titanium.UI.createPicker({id:'picker',data:data,selectionIndicator:true});
		picker.addEventListener('change', function(e)
		{
			document.getElementById('value').innerHTML = 'column ' + e.column + '<br/> row ' + e.row + '  value[1] ' + e.selectedValue[0] + ' value[2] ' + e.selectedValue[1];
		});

		// set one column of data
		document.getElementById('button1').onclick = function()
		{
			var col1 = {data:[
			    {title:'Dogs', selected:true,fontSize:10},
			    {title:'Cats',fontSize:10},
			    {title:'Birds',fontSize:10},
			    {title:'Donkeys',fontSize:10},
			    {title:'Elephants',fontSize:10},

				]
			};

			try{
			picker.setColumnData(0,col1.data);
			}catch(e){Ti.API.debug('Failed '+e);}

		};

		// select a row
		document.getElementById('button2').onclick = function()
		{
			picker.selectRow(3,0,{animated:true});
		};

		// reset entire picker data
		document.getElementById('button3').onclick = function()
		{
			var data = [];
			var col1 = {data:[
			    {title:'One', selected:true,fontSize:10},
			    {title:'Two',fontSize:10},
			    {title:'Three',fontSize:10},
			    {title:'Four',fontSize:10},
			    {title:'Five',fontSize:10},

				]
			};

			// support html attribute (also supports selected attribute for initial value)
			var col2 = {width:150,data:[
			    {html:'<div>Div 1</div>'},
			    {html:'<div>Div 2</div>'}

				]
			};

			// add columns to array
			data.push(col1);
			data.push(col2);

			picker.setData(data);
		};


		document.getElementById('button4').onclick = function()
		{
			try{
			var res=picker.getSelectedRow(0);
			Ti.API.debug('Selected: '+res);
			document.getElementById('value').innerHTML = res;
			}catch(e){Ti.API.debug('Failed '+e);}
		};

		document.getElementById('button5').onclick = function()
		{
			try{
			var res=picker.getSelectedRow(1);
			Ti.API.debug('Selected: '+res);
			document.getElementById('value').innerHTML = res;
			}catch(e){Ti.API.debug('Failed '+e);}
		};

    
};
