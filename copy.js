function copy(){
    let textInBoxResult = document.getElementById('outputText');
    textInBoxResult.select();
    textInBoxResult.setSelectionRange(0, 99999);
    document.execCommand('copy');
}