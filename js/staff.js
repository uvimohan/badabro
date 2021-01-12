const defaultStaffValue = [
    ['Days', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
    ['Monday', 1, 10, 20, 0,  4],
    ['Tuesday',  4, 14, 10, 2, 3],
    ['Wednesday',  20, 5, 10, 4, 2],
    ['Thursday',  24, 34, 40, 2, 3]
];

document.getElementById('staffSelection').addEventListener('change', function() {
    let staffDropDown = this.options[this.selectedIndex].value;
    var staffValues = [];
    switch (staffDropDown) {
        case 'staff_1':
            staffValues = [
                ['Days', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
                ['Monday', 1, 10, 20, 0,  4],
                ['Tuesday',  4, 14, 10, 2, 3],
                ['Wednesday',  20, 5, 10, 4, 2],
                ['Thursday',  24, 34, 40, 2, 3]
            ]
            break;
        case 'staff_2':
            staffValues = [
                ['Days', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
                ['Monday', 10, 7, 25, 23,  6],
                ['Tuesday',  14, 4, 11, 12, 17],
                ['Wednesday',  15, 7, 25, 21, 20],
                ['Thursday',  20, 17, 31, 25, 17]
            ]
            break;
        case 'staff_3':
            staffValues = [
                ['Days', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
                ['Monday', 12, 11, 20, 6,  14],
                ['Tuesday',  5, 15, 10, 27, 23],
                ['Wednesday',  8, 17, 15, 28, 2],
                ['Thursday',  16, 18, 22, 20, 15]
            ]
            break;
        case 'staff_4':
            staffValues = [
                ['Days', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
                ['Monday', 1, 10, 20, 10,  4],
                ['Tuesday',  4, 14, 10, 20, 3],
                ['Wednesday',  20, 5, 10, 17, 2],
                ['Thursday',  24, 34, 17, 20, 13]
            ]
            break;        
        default:
            staffValues = defaultStaffValue;
            break;

    }
    drawVisualization(staffValues);
})

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization(StaffValues) {
    if(StaffValues == null) {
        StaffValues = defaultStaffValue;
    }
	var data = google.visualization.arrayToDataTable(StaffValues);
	var options = {
        width: 750,
        height: 600,
		title : 'Collection Report',
		vAxis: {title: 'Target'},
		hAxis: {title: 'Days'},
		seriesType: 'bars',
        series: {5: {type: 'line'}}        
	};

	var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}