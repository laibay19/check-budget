function num() {
    let expenses = +document.getElementById("expenses").value
    let bugde = +document.getElementById("budge").value
    let result =""

    if( bugde <= expenses){
        result = "you are elegible"
    }else{
        result ="you are not alegible"
    }
    
    let output = document.getElementById("result")
    output.innerHTML=(result)
}