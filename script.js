//give random passive aggressive messages
//REMEMBER TO ADD CHANGES TO GITHUB USING PUSH ----- git push -u origin main

//Imported modules
shuffle = require('./useful-functions')


//House 3 different arrays so that messages can trully be random
const introCussPhrase =['Holy shit.', 'What the fuck.', 'Goddamit.', 'Jesus Fucking Christ.', 'Shit baskets.']
const insultPhrase = ['You really don\'t know when to shut up.','At this point listining to you is like white noise.', 'You have to be the poster child of incompetentce.', 'The things that come out of your mouth never make any sense.','Your face really reminds me nature has a sense of humor.']
const superlativePhrase = ['It\'s impressive.', 'It\'s amazing.', 'It\'s depressing.', 'It\'s irritating.', 'It\'s incredible.']

const shufflePhrases= () =>{
    shuffle (introCussPhrase);
    shuffle (insultPhrase);
    shuffle (superlativePhrase);
};

const makeNewPhrase = () =>{
    shufflePhrases()
    console.log(`${introCussPhrase[0]} ${insultPhrase[0]} ${superlativePhrase[0]}`)
};

makeNewPhrase();