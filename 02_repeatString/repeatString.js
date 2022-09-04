const repeatString = function(string, num) {

    let result = '';
    let i = 0; 
    while (i < num) {
        result += string;
        i ++
    }
  return result 
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
