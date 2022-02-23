
let abc
function trim(abc)
{
    return "functionUp"
}
function lowerCase(abc)
{
    let lower = trim().toLowerCase()
    return lower
}
function upperCase(abc)
{
    let upper = trim().toUpperCase()
    return upper
}

//console.log(a)
module.exports.trim = trim;
module.exports.lowerCase = lowerCase;
module.exports.upperCase = upperCase;