var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var txtoutput = document.querySelector("#txt-output")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured",error)
    alert("somethingwnet wrong, try againg after sometime")
}


function clickHandler() {
   
    // txtoutput.innerText =  txtInput.value;
    var innerText = txtInput.value;

    fetch(getTranslationURL(innerText))
    .then(response => response.json())
    .then(json =>{
        txtoutput.innerText = json.contents.translated;
        })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler)



