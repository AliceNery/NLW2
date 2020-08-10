//procurar o botao
document.querySelector("#add-time") //id do botao
.addEventListener('click',cloneField)
//quando encontrar o botao
//executar uma acao
function cloneField(){
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');
    
    fields.forEach(function(field){
        field.value = ""
    })
    //colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    
    