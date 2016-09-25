// This code is my attempt to answer the challenge at https://goo.gl/dShDe2

var bulbsNum = 5000000; // Number of switches and bulbs
var switches = [];

// initializing the state of each switch
for(i=0;i < bulbsNum; i++) {
	switches[i] = 0;
};

//Getting the input
//var input =  [[3, 6],[0, 4], [7, 3], [9, 9]];
var input = [];

readFile();


// V2.0 Trying to read from a file with *gasp AJAX
function readFile() {
	$.ajax({
		url: "lots_of_switches.txt",
		async: false,
		success: function(data) {
				var text = String(data);
				slicedText = text.split(/\n/);
			 },
	 });

	 // Going through the ranges, breaking and storing them into an array, god help me...
	 ranges= [];

	 for (var i = 0; i < slicedText.length; i++) {
		 ranges[i] = slicedText[i].split(" ");
	 }

	 //breakRange(input);
}
convertToNum(ranges);

function convertToNum() {
	for (var i = 0; i < ranges.length; i++) {
		for (var j = 0; j < ranges[i].length; j++) {
			ranges[i][j]=Number(ranges[i][j]);
		}
	}

};

// function breakRange() {
// 	for (var i = 0; i < input.length; i++) {
//
// 	}
// };

inputConvert(ranges);
function inputConvert(toggled) {
	console.log(toggled.length);
	// Going through the input array and sending the intervals to the toggleSwitch function
	for (var i = 0; i < toggled.length; i++) {
		toggleSwitch(toggled[i][0], toggled[i][1]);
	}
};

// Running through the switches again and comparing them with the input intervals, toggling them on or off depending on their initial state
function toggleSwitch(firstToggle, lastToggle) {
	for(i=0;i<bulbsNum; i++) {
		if ( i >= firstToggle && i <= lastToggle) {
			if(switches[i]===0) {
				switches[i] = 1;
			} else {
				switches[i] = 0;
			}
		}
	};
};
result();

function result() {
	var onSwitches = 0;

	for(i=0;i < bulbsNum; i++) {
		if (switches[i] !== 0) {
				console.log(i);
			onSwitches += 1;
		};
	};
	console.log(onSwitches);
};
