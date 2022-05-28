/*
I've made this document to provide 2 possible ways os acheiving a random quote generator.
The first method uses If/else statments to provide selected quotes.
The second method uses arrays.
The basis for the code to work is the random number generator that is used to select a random quote.

*/

// solution 1 - If/else. UNQUOTE TO SEE WORKING
/*
function genQuote() {
    const randomNum = Math.floor(Math.random() * 4)

    if (randomNum === 1) {
        document.getElementById('quote').innerHTML = "'Waste no more time arguing about what a good man should be. Be one.' - Marcus Aurelius, Emperor of Rome. Lived from 121-180 AD."
    } else if (randomNum === 2) {
        document.getElementById('quote').innerHTML = "'Beware the barrenness of a busy life.' Socrates, classical Greek philosopher. Born 470 or 469 BC, died 399 BC."
    } else if (randomNum === 3) {
        document.getElementById('quote').innerHTML = "'Happiness and freedom begin with one principle. Some things are within your control and some are not.' Epictetus – Stoic philosopher. Lived from 55-155 AD."
    } else {
        document.getElementById('quote').innerHTML = "Do not say a little in many words but a great deal in few'. Pythagoras, Ionian Greek mathematician and philosopher. Lived from 570-495 BC."
    }
}
*/


// solution 2 - Array. THIS IS THE STANDARD SOLUTION.
const quotes = ['“i can never get back by day, / nor can remember plain and clear / the curious music that i hear.” - robert louis stevenson, “the land of nod”',
    '“i have made my bed / in charnels and on coffins, where black death / keeps record of the trophies won…” - shelley, “alastor; or, the spirit of solitude”',
    '“to see a world in a grain of sand / and a heaven in a wild flower / hold infinity in the palm of your hand / and eternity in an hour.” - william blake, “auguries of innocence”',
    '“i hold it true…‘tis better to have loved and lost / than never to have loved at all.” - tennyson, “in memoriam a.h.h”',
    '“beat, happy stars, timing with things below, / beat with my heart more blest than heart can tell, / blest, but for some dark undercurrent woe / that seems to draw–but it shall not be so; / let all be well, be well.” - tennyson, “maud”'
];

function genQuote() {
    //we creat a function to do the work that the if/else statments would do.
    const randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum];
}
//as you can see the Array solution takes up less code and is more sofisticated.