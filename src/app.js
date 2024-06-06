const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

numbers.filter(n=>{
    return n<10;
})

// const doubles = numbers.map(function(num){
//     return num*2;
// })

// numbers.forEach(function (el){
//     if(el % 2 == 0){
//         console.log(el)
//     }
// })

// for(let el of numbers){
//     console.log(el);
// }

const movies = [
    {
        title: 'Parasite',
        score: 99
    },
    {
        title: 'Black Panther',
        score: 99
    },
    {
        title: Lagaan,
        score: 99
    },
    {
        title: 'RRR',
        score: 99
    }
]

const goodMovies = movies.filter(score>=90);

// const titles = movies.map(function(movies){
//     return movies.title;
// })

// const add = function(x,y){
//     return x+y;
// }

// const add = (x,y) =>{
//     return x+y;
// }

// const square = (x) =>{
//     return x*x;
// }

// const rollDie = () =>{
//     return Math.floor(Math.random()*6)+1;
// }

// const rollDie = () =>(
//     Math.floor(Math.random()*6)+1
// )

// const add = (a,b) =>(a+b)