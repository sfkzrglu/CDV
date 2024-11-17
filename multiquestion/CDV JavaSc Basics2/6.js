// Modify your previous code to include the dates of the previous or next month in their negative form instead of the 'zeros' in your previous calendar function.

// Ex. calendar(4,2020) returns this 2D array:
// [
// [-29,-30,-31,1,2,3,4],
// [5,6,7,8,9,10,11],
// [12,13,14,15,16,17,18],
// [19,20,21,22,23,24,25],
// [26,27,28,29,30,-1,-2]
// ]
 

function getStartDayOfMonth(month,year){
    var date = new Date(`${year}/${month}/01`);
    return date.getDay()==0?7:date.getDay();
}

function calander(month,year) {
    let arr=[];
    let days=new Date(year, month, 0).getDate();  
    let preMonthDays=function(){
        if (month-1<=0) {
            return new Date(year-1, 12, 0).getDate();
        } else {
            return new Date(year, month-1, 0).getDate();
        }
    }
    let startDayOfCurrentMonth=getStartDayOfMonth(month,year);
    let counterStartDayOfCurrentMonth=1;
    let daysCounter=1;
    let nextMonthDayCounter=1;

    for (let w = 0; daysCounter<=days;w++) {
        let week=[];
        for (let d = 0; d <7; d++) {
            //assigment of previous month
            if (counterStartDayOfCurrentMonth<startDayOfCurrentMonth) {
                let preMonthDay=-1*(preMonthDays()-startDayOfCurrentMonth+d+2);
                week.push(preMonthDay);
                counterStartDayOfCurrentMonth++;
            }         
            else{          
                if (daysCounter<=days) {
                    week.push(daysCounter);
                    daysCounter++;
                }else{
                    week.push(-nextMonthDayCounter);
                    nextMonthDayCounter++;                 
                }
            }
        }  
        arr.push(week);    
    }
    return arr;
}

console.log(calander(11,2024));