String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

var oFileIn = document.getElementById('xlxInput');
if(oFileIn.addEventListener) {
	oFileIn.addEventListener('change', filePicked, false);
}

function filePicked(oEvent) {		    
	var oFile = oEvent.target.files[0];
	var sFilename = oFile.name;
	var reader = new FileReader();

	reader.onload = function(e) {
		var data    =   e.target.result;
		var cfb     =   XLSX.read(data, {type: 'binary'});        
		sheetName   =   cfb.SheetNames[0];        
		var sheetJson       = XLS.utils.sheet_to_json(cfb.Sheets[sheetName]);        
		var totalRecords    = 0;
		var counts          = [];
		var gender          = [];
        gender['No Gender'] = 0;
		for (key in sheetJson) {			
			if(sheetJson[key].Gender) {
				var genderValue = sheetJson[key].Gender;
				if(gender[genderValue] != undefined) {
					gender[genderValue]++;
				} else {
					gender[genderValue] = 0;
				}
			} else {
                gender['No Gender']++;
            }

			if(sheetJson[key]['Profile Status'] != "NULL") {
				var profileValue = sheetJson[key]['Profile Status'];
				if(counts[profileValue] != undefined) {
					counts[profileValue]++;
				} else {
					counts[profileValue] = 0;
				}
			}
		}
        console.log(gender)
        let ArrayKeys = [];
        let ArrayValues = [];
        for(key in counts) {
            let keyTmp = key.toLowerCase();
			keyTmp = keyTmp.replace('completed', ' completed');
			keyTmp = keyTmp.toProperCase();
            ArrayKeys.push(keyTmp);
            ArrayValues.push(counts[key]);            
        }

        let chartData = [ArrayKeys,ArrayValues];
		drawChart(chartData, gender);
	};

	reader.readAsBinaryString(oFile);
}

google.charts.load('current', {'packages':['bar']});
function drawChart(chartData, gender) {
	var data = google.visualization.arrayToDataTable(chartData);

	let genderInfo = '';
	for (key in gender){
		genderInfo += " " + key + " - " + gender[key];
	}

	var options = {
		chart: {
			title: 'Profile completion',
			subtitle: 'Total number of person based on gender ' + genderInfo,
		},
        height: window.outerHeight/1.5
	};

	var chart = new google.charts.Bar(document.getElementById('profile_chart_div'));
	chart.draw(data, google.charts.Bar.convertOptions(options));
}