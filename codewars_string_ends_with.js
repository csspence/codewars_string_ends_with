/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

const solution = (str, ending) => {
  let start = str.length - ending.length;
  let index = 0;
  for(let i = start; i < str.length; i++) {
    if(str[i] !== ending[index]) {
      return false;
    }
    index++;
  }

  return true;
}