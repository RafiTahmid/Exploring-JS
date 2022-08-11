function isJavaScriptFile(str){

    if(typeof str === 'string'){
        console.log(str.endsWith('.js'));
    }
    else{
        console.log('Input Requires String')
    }
}
isJavaScriptFile(2);