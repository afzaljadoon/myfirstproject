    let re;
    // String Laterals
    re=/hello/;
    // re = /hello/i; // i = case insensitive

    // Metacharacter Symbols
    re = /^h/i; //Must Start With
    re = /d$/i; //Must End With
    re = /^hello$/i; //Must Begin And End With
    re = /h.llo/i; //Matches Any One Character
    re = /h*llo/i; //Matches Any Character 0 Or More
    re = /gre?a?y/i; //Optional Character
    re = /gre?a?y\?/i; //Escape Character

    // Bracket[] - Character Sets
    re = /gr[ae]y/i; //Must be an a or e
    re = /[GF]ray/; //Must be a G or F
    re = /[^GF]ray/; //Match Anything Without G or F
    re = /[A-Z]ray/; //Match Any Upper Case Letter
    re = /[a-z]ray/; //Match Any Lower Case Letter
    re = /[A-Za-z]ray/; //Match Any Letter
    re = /[0-9][0-9]ray/; //Match Any Digit

    // Braces {} - Quantifiers
    re = /Hel{3}o/; //Must Occur exactly {m} Amount Of Numbers
    re = /Hel{2,5}o/; //Must Occur exactly {m} Amount Of Numbers
    re = /Hel{2,}o/; //Must Occur Atleast {m} Times

    // Parenthesis () - Grouping
    re = /^([0-9]x){3}$/;

    // Shorthand Character Classes
     re = /\w/; //Word Character - Alphanumeric or _ 
     re = /\w+/; // + = One Or More 
     re = /\W/; //Non-word Character
     re = /\d/; //Match Any Digit
     re = /\d+/; //Match Any Digit 0 or More Times
     re = /\D/; //Match Any Non-Digit
     re = /\s/; //Match Any Whitespace Character
     re = /\S/; //Match Any Non-Whitspace Character
     re = /\Hell\b/i; //Word Boundary

    //  Assertions
    re = /x(?=y)/; //Match x Only if Followed By y
    re = /x(?!y)/; //Match x Only if Not-Followed By y

    // const str = 'hfhjdhxjkjhj';

    // re = /hello/g; // Global Search

    // console.log(re);
    // console.log(re.source);

    // exec() : Return Result in An Array Or Null 
    // const result = re.exec('hello world');

    // console.log(result);
    // console.log(result[0]);
    // console.log(result.index);
    // console.log(result.input);

    // test() : Return True Or False
    // const result = re.test('Hello');
    // console.log(result)

    // match() : Return Result or Null
    // const str = 'Hello World';
    // const result = str.match(re);

    // console.log(result);

    // search() : Return index of the first match and if not found return -1

    // const str = 'Brad Hello World';
    // const result = str.search(re);

    // console.log(result)

    // replace() : Return new string with some or All matches of a pattern
    // const str = 'Hello There';
    // const newStr = str.replace(re, 'Hi');

    // console.log(newStr);

    // String TO Be Matched
    // const str = 'gray?';

    // Log Results
    // const results = re.exec(str);
    // console.log(results);

    // function reTest (re, str) {
    //     if(re.test(str)){
    //         console.log(`${str} Matches ${re.source}`)
    //     }else{
    //         console.log(`${str} Does NOT Match ${re.source}`)
    //     }
    // }

    // reTest(re, str);
