/* HARRY POTTER TITLES

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (let i = 0; i < harryPotterTitles.length; i++) {
    console.log(`Harry Potter ${harryPotterTitles[i]}`);
} */

/*  STUDENT GRADES PARTS 1 & 2

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (let i = 0; i < grades.length; i++) {

    if (grades[i] >= 0 && grades[i] <= 69) {
        console.log("You got an F")
    } else if (grades[i] >= 70 && grades[i] <= 76) {
        console.log("You got a D")
    } else if (grades[i] >= 77 && grades[i] <= 84) {
        console.log("You got a C")
    } else if (grades[i] >= 85 && grades[i] <= 92) {
        console.log("You got a B")
    } else {
        console.log("You got an A")
    };

} 

let numberOfAs = 0;
let numberOfBs = 0;
let numberOfCs = 0;
let numberOfDs = 0;
let numberOfFs = 0;
let cumulativeGrades = 0;

for (let i = 0; i < grades.length; i++) {
    cumulativeGrades += grades[i];
    if (grades[i] >= 0 && grades[i] <= 69) {
        numberOfFs++;
    } else if (grades[i] >= 70 && grades[i] <= 76) {
        numberOfDs++;
    } else if (grades[i] >= 77 && grades[i] <= 84) {
        numberOfCs++;
    } else if (grades[i] >= 85 && grades[i] <= 92) {
        numberOfBs++;
    } else if (grades[i] >= 93 && grades[i] <= 100) {
        numberOfAs++;
    };
}

let averageGrades = cumulativeGrades / grades.length;

console.log(`There are ${numberOfAs} students who received A's`);
console.log(`There are ${numberOfBs} students who received B's`);
console.log(`There are ${numberOfCs} students who received C's`);
console.log(`There are ${numberOfDs} students who received D's`);
console.log(`There are ${numberOfFs} students who received F's`);
console.log(`The average grade for the whole class was ${averageGrades}`);
*/


/* TWO, FOUR, SIX, EIGHT, WHO DO WE APPRECIATE CHEER

for (i=2; i < 11; i += 2) {
    if (i === 2 || i === 4 || i === 6 || i === 8) {
        console.log (i);
    } else {
        console.log("Who do we appreciate?!")
    };
}
*/



/* INTERRUPTING COW

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let newSentence = "";

for (i = 0; i < sentenceArray.length; i++) {
    if (i > 0 && i % 3 === 0) {
        newSentence += `MOOOOOO `;
        newSentence += `${sentenceArray[i]} ` 
    } else {
        newSentence += `${sentenceArray[i]} `;
    }
}

console.log(newSentence);
*/

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
};

for (let i = 0; i < beatles.albums.length; i++) {
    console.log(`${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} Album.`)
};