var monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var satOnFirsts = 1;
var startYear = 1701;
var endYear = 1799;
var currentYear = startYear;


for (y= 1701; y < 1703; y++){


// is this a leap year?
if (currentYear % 4 == 0){
	monthArray[1] = 29;
}
var j = 1;
var previousNum = j;
for (i = 0; i < 12; i++){
	j = j + 7;
	if (j == monthArray[i] + 1){
		satOnFirsts++;
	}else{
		j = 7 - (monthArray[i] - previousNum);
	}
console.log(j)
}


monthArray[1] = 28;
}
console.log(`The number of Saturdays on the first of the month between 1701 and 1799 is ${satOnFirsts}`)
