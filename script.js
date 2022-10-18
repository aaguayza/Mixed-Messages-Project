//REMEMBER TO ADD CHANGES TO GITHUB USING PUSH ----- git push -u origin main

//Imported modules
shuffle = require('./useful-functions');


const phrases = {
    introCussPhrase: ['Holy shit.', 'What the fuck.', 'Goddamit.', 'Jesus Fucking Christ.', 'Shit baskets.'],
    insultPhrase: ['You really don\'t know when to shut up.','At this point listining to you is like white noise.', 'You have to be the poster child of incompetentce.', 'The things that come out of your mouth never make any sense.','Your face really reminds me nature has a sense of humor.'],
    superlativePhrase: ['It\'s impressive.', 'It\'s amazing.', 'It\'s depressing.', 'It\'s irritating.', 'It\'s incredible.'],
};


const shufflePhrases= () =>{
    shuffle (phrases.introCussPhrase);
    shuffle (phrases.insultPhrase);
    shuffle (phrases.superlativePhrase);
};

const makeNewPhrase = () =>{
    shufflePhrases()
    console.log(`${phrases.introCussPhrase[0]} ${phrases.insultPhrase[0]} ${phrases.superlativePhrase[0]}`)
};

makeNewPhrase();