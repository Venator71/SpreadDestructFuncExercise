// March 24, 2022

// Q 1a

const jPDinos = ["Velociraptors", 
    "Tyrannosaurus Rex",
    "Dilophosaurus"
]

// Q 1b

function seeDinos(d, ...j){
    console.log(d);
    console.log(j);
};

seeDinos(...jPDinos);

// Q 2a

const jPCharacters = {
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

// Q 2b 

seeCharacters = ({ellieSattler})=>{
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

console.log('='.repeat(100));

// Q 3a  BONUS

const jurassicParkMovies =[
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park",
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World",
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Dominion"
    }
];

// Q 3b

/*function seeJPMovies() {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);    
    
}
*/

const [{one,two,three},{four,five,six}] = jurassicParkMovies;

const allMovies =[one,two,three,four,five,six];

seeJPMovies =y => { 
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(allMovies);

//or
console.log('='.repeat(47),'or','='.repeat(48));

function seeJPMovies([{one,two,three},{four,five,six}]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(jurassicParkMovies);
console.log('='.repeat(47),'or','='.repeat(48));

seeJPMovies = ({one,two,three},{four,five,six}) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(...jurassicParkMovies)