const str1 = "ahoj"
const str2 = "hello"
const str3 = "CodingMoney"

const number1 = 15
const number2 = -456
const number3 = 189

const reverse = (str) => {
  const rev = str.split("").reverse().join("")
  console.log(rev)
}
reverse(str1)

const reverseNum = (n) => {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}
console.log(reverseNum(number1))
  