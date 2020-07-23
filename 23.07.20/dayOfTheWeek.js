let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date) {
    let week = ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"];

        return (week[date.getDay()]);

}

alert( getWeekDay(date) );