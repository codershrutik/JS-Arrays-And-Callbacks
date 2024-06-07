// const prices = [9,10,11,12,60,74,35];

// let Total = 0;
// for(let price of prices){
//     Total += price
// }
// console.log(total)

// const Total = prices.reduce((Total, price)=>{
//     return total+price
// })

const person = {
    firstName: 'Viggo',
    lastName: 'Mortenson',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(()=>{
            console.log(this),
        console.timeLog(this.fullName())
        },3000)
}