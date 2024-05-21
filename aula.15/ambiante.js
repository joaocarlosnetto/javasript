var num = [5,2,7]
num.push(4)
num.sort()
for(var pos in num){
    console.log(num[pos])
}
var pos = num.indexOf(2)
console.log('O número 2 está na posição ' + pos)
