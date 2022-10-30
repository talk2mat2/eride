// Create function to convert given string to the output below

// Input
const optionRule = '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})';

// Output Example
/* const output = {
  and: [
    1069,
    { or: [1070, 1071, 1072] },
    1244,
    { or: [1245, 1339] },
  ]
}; */

let result = 'result'

console.log('result:', result);

function split(value=""){
 
  let andArr=[]
  let refined=value.replace(/\{|\}/g, '').split(" AND ").map(item=>item.replace(/\(|\)/g, ''))
  refined.forEach(item=>{if(item.split("OR").length>1){
    andArr.push({or:item.split("OR")})
  }
else{andArr.push(item)}

})
return {and:andArr}
}
