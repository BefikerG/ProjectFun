//amhLetterDectctor//
//it checks for other chatcters rather than a-z or 0-9
//it takes STRING as parameter and returns a boolen TRUE or FALSE

function amhLetterDetctor(str){
    const amh_pattern = /[^a-z || \d]/gi
    const check = amh_pattern.test(str)
    return check

}

//set_class_seperately//
//this function is made for this project specifically 
//it gives for amhric charcters class seperatly for easy soearate styling in css
// the function takes 3 parameters
// the string to be classified 
// class name and element type eg p,span,h1-h6....
//all parameters have to be STRING
//the out put looks as follows 
    /* <span class='amh'>አማርኛ</span>mhcda */
    //NB the function have a default setup incase if its not used

function set_class_seperately(str = 'አማርኛmhcda',className='amh',element='span'){
    const amh_pattern = /[^a-z || \d]/gi
    let amh_chars = str.match(amh_pattern)
    let eng_chars = str.replace(amh_pattern, '')

    amh_chars = `<${element} class='${className}'>${amh_chars.join('')}</${element}>`
    let final = `${amh_chars}${eng_chars}`
    return final
}

//the following function separates a string of amhric words and give them class separatly
//it takes 3 pramaeters , THE STRING , THE HTML ELEMENT and Class Name
//It have a default setup
/*
    NB: after using this function the function must have to be used as #innerHTML than #textContent 
*/

function amhric_words_manuplator(str = 'እኔ MHCDA እኔ ሃበሻ ነኝ',element = 'p',className = 'amh'){
    const untriggered_chars = /[^a-z\d\/-]*/gi
    let match = str.match(untriggered_chars)
    match = match.filter(e => e !='' && e!=' ')

    for(let char of match){
        str = str.replace(char,`<${element} class='${className}'>${char}</${element}>`)
    }
    
    return str
}
