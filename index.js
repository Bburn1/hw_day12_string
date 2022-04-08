'use strict'


function getString(str){
        let str1 = str.split(' ')
        let str2 = str1.reverse()
        let str3 = str2.join(' ')
    return str3;
}

console.log(getString('I learn JS'));