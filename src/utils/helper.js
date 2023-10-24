function compareTime(timeString1,timeString2){
    let dateTimet1 = new Date(timeString1);
    let dateTimet2 = new Date(timeString2);
    return dateTimet1.getTime() > dateTimet2.getTime();
}

module.exports = {
    compareTime
}