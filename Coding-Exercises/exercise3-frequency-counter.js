function sameFrequency(num1, num2) {
  let string1 = num1.toString();
  let array1 = string1.split('');
  let string2 = num2.toString();
  let array2 = string2.split('');
  let count1 = {};
  let count2 = {};
  let flag = true;

  if (array1.length !== array2.length) {
    flag = false;
  }

  array1.forEach(function(s) {
     count1[s] ? count1[s]++ : count1[s] = 1;
  });

  array2.forEach(function(s) {
     count2[s] ? count2[s]++ : count2[s] = 1;
  });

  Object.keys(count1).forEach(key => {
    let oneVal = count1[key];
    let twoVal = count2[key];
    if(oneVal != twoVal) {
      flag = false;
    }
  });

  return flag;
}