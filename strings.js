 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';


//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';

function uppercasePersonalPronoun(sentence)
{
    arr_output = []
    arr_sentence = sentence.split(" ")
    for (var i = 0; i<arr_sentence.length; i++)
    {
        str_word = arr_sentence[i];
        if (str_word == 'i')
            {
            arr_output.push("I")        
            } 
        else
            {   
            arr_output.push(str_word)    
            }
    }
    output = arr_output.join(" ")
    return output
}

function countA(text)
{
    sum = 0
    for (var i = 0; i < text.length; i++)
    {
        char = text[i];
        if (char == 'a' || char == 'A')
        {sum++}
        //console.log(char)
    }
    return sum;
}


function uppercaseScream(text)
{
    arr_output = []
     arr_sentence = text.split(" ")
    //console.log(arr_sentence)
    for(var i = 0; i < arr_sentence.length; i++)
    {
        var word = arr_sentence[i];
        if (word == 'scream' ||  word=='scream,')
        {
            arr_output.push("SCREAM")
        }
        else    
        {
            arr_output.push(word)
        }
    }
    output = arr_output.join(" ")
    return output;
}


console.log(uppercasePersonalPronoun(sentence))
console.log(countA(jsHistory))
console.log(uppercaseScream(text))




