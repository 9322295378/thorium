
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

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo

