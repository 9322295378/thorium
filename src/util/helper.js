
function printDate(){
 let today = new Date()
let date = today.getDate()+'-'+today.getFull;
console.log('current date is :',date)
}
function printMonth(){
    let today = new Date()
    let month = today.getMonth()+1
    console.log('month')

}
function getBatchInfo(){
    console.log('Thorium , W3D1, the topic for today is nodejs module system')

}

module.exports.printCurrentDate() =printDate
module.exports.printCurrentMonth()= printMonth
module.exports.printBatchInfo() = getBatchInfo 

