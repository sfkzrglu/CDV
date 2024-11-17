// Write a function 'calendar(month,year)' which takes two parameters 'month' (ex. 4 for April) and 'year' (ex. 2020)
// and returns a calendar in the form of a 2-dimensional array, where columns represent the days of the week, and rows represent weeks.

// Ex. calendar(4,2020) returns this 2D array:
// [
// [0,0,0,1,2,3,4],
// [5,6,7,8,9,10,11],
// [12,13,14,15,16,17,18],
// [19,20,21,22,23,24,25],
// [26,27,28,29,30,0,0]
// ]
	
 
function getStartDayOfMonth(month,year){
    var date = new Date(`${year}/${month}/01`);
    return date.getDay()==0?7:date.getDay();
}
​
function calander(month,year) {
    let arr=[];
    let days=new Date(year, month, 0).getDate();  
    let startDayOfCurrentMonth=getStartDayOfMonth(month,year);
    let counterStartDayOfCurrentMonth=1;
    let daysCounter=1;
​
    for (let w = 0; daysCounter<=days;w++) {
        let week=[];
        for (let d = 0; d <7; d++) {
            //assigment of previous month
            if (counterStartDayOfCurrentMonth<startDayOfCurrentMonth) {
                week.push(0);
                counterStartDayOfCurrentMonth++;
            }         
            else{          
                if (daysCounter<=days) {
                    week.push(daysCounter);
                    daysCounter++;
                }else{
                    week.push(0);                 
                }
            }
        }  
        arr.push(week);    
    }
    return arr;
}
​
console.log(calander(11,2024));