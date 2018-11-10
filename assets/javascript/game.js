var content = ["Maine is the 12th smallest by area, the 9th least populous, and the 38th most densely populated of the 50 U.S. states. It is bordered by New Hampshire to the west, the Atlantic Ocean to the southeast, and the Canadian provinces of New Brunswick and Quebec to the northeast and northwest respectively. Maine is the easternmost state in the contiguous United States, and the northernmost east of the Great Lakes. It is known for its jagged, rocky coastline; low, rolling mountains; heavily forested interior; and picturesque waterways, as well as its seafood cuisine, especially lobster and clams. There is a humid continental climate throughout the state, even in coastal areas such as its most populous city of Portland. The capital is Augusta",
"The American lobster, Homarus americanus, is found on the east coast of North America, from Newfoundland to North Carolina, with Maine Lobster being the most abundant and delicious. In 2016, Maine Lobster led the catch with 130 million pounds, over $500 million worth, the world leader for seven years consecutively. Oh, and its the best tasting lobster too!",
"There are fifty-seven active lights in the state, two of which are maintained as private aids; nine are standing but inactive, and three have been destroyed, one of which has been replaced by a skeleton tower. This includes two stations which originally featured twin towers; in both cases both towers survive but only one of each pair is active. The Portland Head Light, first lit in 1791, is the oldest light in the state and was the first US lighthouse completed after independence from Britain.[2][3] The last lighthouse in the state, the second Whitlocks Mill Light, was first lit in 1910; it is also the most northerly light in the state and therefore on the US Atlantic Coast. The West Quoddy Head Light sits on the easternmost point of the continental United States. The tallest tower is that of Boon Island Light at 137 ft (42 m),[6] though the Seguin Light focal plane, at 180 ft (55 m), is the highest in the state.", 
"Maine is lucky enough to be one of only a few states in the U.S. that has a sizable moose population. State biologists estimate the Maine moose population to be around 75,000—that’s the largest concentration of moose in the country next to Alaska.",
"Maine, known fondly as “The Pine Tree State” has a long, rich history of logging. Before gaining its statehood in 1820, Maine was part of the Massachusetts territory and was involved in the lumber trade with England. In the early days, beautiful pines were harvested from Maine’s forests to supply masts for England’s navy. Settlers to the region also used wood to build homes and other buildings in their settlements. Logging is still a thriving industry in this beautiful state today, particularly in the northern regions.",
 "Maine has a long history with the canoe. The Wabanaki native americans of the area used birch bark canoes to travel from winter inland hunting grounds back to the coast for summer. Today the many rivers and lakes of Maine make it a recreation haven for the capable watercrafts.", "The rugged nature of the Maine coastline and of many of its islands is the result of the action of retreating glaciers back during the last ice age. Amazingly, there are over 3,000 islands off the coast of Maine, many of which are uninhabited, pristine, and incredibly picturesque."];



var image = ["https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/13340264_10103062310307449_6168287561361947892_o.jpg?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=2166d260fe6ec50e5110f9f9210240a0&oe=5C85FBA5",
"https://images.immediate.co.uk/volatile/sites/4/2018/07/iStock_61948836_XLARGE-30c432a.jpg?quality=45&resize=960,413",
"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/14462763_10103306357390139_4463676866326990034_n.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=feed6dd2264f971510da54a1c32fa4d7&oe=5C7F4734", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1024px-Moose_superior.jpg", "assets/images/lumber.jpg", 
"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p206x206/18222478_10103967060580649_6760063655421602934_n.jpg?_nc_cat=101&_nc_ht=scontent-sjc3-1.xx&oh=bb8437c3a0d84f099f7dc2b5ad1d6b59&oe=5C6C9C4C", "assets/images/island4.jpg"
];



var wordList = ["lobster", "lighthouse", "moose", "lumber", "canoe", "island"];

var correct = false;
var guessedLetters = [];
var currentWordIndex = 0;
var currentWord = [];
var remainingGuesses = 7;
var wins = 0;
var check = 0;

updateFacts = function(){
    document.getElementById("funFact").innerText = content[currentWordIndex];
    document.getElementById("guessedWord").innerText = "You correctly guessed " + wordList[currentWordIndex - 1]+ " !!";
    document.getElementById("imgChange").src = image[currentWordIndex];
}


startGame = function () {
    currentWord = [];
    for (var i = 0; i < wordList[currentWordIndex].length; i++) {
        currentWord.push("_");

    }
    correct = false;
    remainingGuesses = 7;
    gameover = false;
    guessedLetters = [];
    updateHtml();
    
}

updateHtml = function () {
    document.getElementById("currentWord").innerText = currentWord;
    document.getElementById("wins").innerText = "WINS: " + wins;
    document.getElementById("guessesRemaining").innerText = "Guesses Remaining " + remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
}

gameState = function (letter) {
    if ((event.keyCode < 65) || (event.keyCode > 91) || (currentWord.indexOf(letter) != -1) || (guessedLetters.indexOf(letter) != -1)) {
        alert("You have already guessed this letter or pressed incorrect key!!!!");
    }
    else if ((event.keyCode > 64) || (event.keyCode < 92)) {
        evaluateGuess(letter);
    }
}
evaluateGuess = function (letter) {
    for (var z = 0; z < wordList[currentWordIndex].length; z++) {
        if (letter === wordList[currentWordIndex][z]) {
            currentWord[z] = letter;
            correct = true;
        }
    }
    if (correct === false) {
        guessedLetters.push(letter);
        remainingGuesses--;
    }
    if (currentWord.indexOf("_") === -1) {
        wins++;
        check++;
        currentWordIndex++;
        updateFacts();
        updateHtml();
        startGame();
    }
    if (remainingGuesses === 0) {
        alert("out of guesses!")
        currentWordIndex++;
        check++;
        updateHtml();
        startGame();
    }
    correct = false;
    updateHtml();


}

document.onkeydown = function (event) {
    if (check === 0) {
        startGame();
        check++;
    }
    else if ((check > 0) && (check < 7)) {
        gameState(String.fromCharCode(event.keyCode).toLowerCase());
    }
    else if (check === 7) {
        alert("thanks for playing final score " + wins + "!, click ok to play again");
        wins = 0;
        currentWordIndex = 0;
        check = 1;
        updateFacts();
        startGame();
    }


    console.log(check)
}




