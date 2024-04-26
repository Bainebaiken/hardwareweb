function product(p1,p2){
    return p1 *p2;
}
const myproduct =product(5,8)
console.log(myproduct)

function difference(n1,n2){
    return n1 - n2;
}
console.log(difference(10,50))
console.log(difference(8,7))

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(77))
document.getElementById("demo").innerHTML = toCelsius(77)
  
  