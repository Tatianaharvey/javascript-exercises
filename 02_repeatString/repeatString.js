const repeatString = function(string, num) {

    let result = '';
    let i = 0; 
    if (num < 0) {
        return "ERROR";
    } 
    while (i < num) {
        result += string;
        i ++
    }
  return result 
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
