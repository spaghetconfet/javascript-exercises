const repeatString = function(string, num) {
    if(num < 0) return 'ERROR';
    let rstr = '';
    for(let i = 0; i < num; ++i){
        rstr += string;
    }

    return rstr;
};

// Do not edit below this line
module.exports = repeatString;
