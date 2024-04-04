const validate = () =>{
    const titre = document.getElementById("titre")
    const contenu = document.getElementById("contenu")
    const div = document.getElementById("madiv")

    let paragraphe = document.createElement("p")
    let texte = document.createTextNode(titre.value)
    paragraphe.appendChild(texte)
    div.appendChild(paragraphe)

    let textarea =document.createElement("p")
    let textare = document.createTextNode(contenu.value)
    textarea.appendChild(textare)
    div.appendChild(textarea)

    let deletbutton = document.createElement("button")//creer la balise "button"
    deletbutton.textContent="suprimer" // creer un 
    deletbutton.className="delete" //
    deletbutton.addEventListener("click",()=>{
        div.removeChild(paragraphe)
        div.removeChild(textarea)
        div.removeChild(deletbutton)

    })

    div.appendChild(deletbutton)
    document.getElementById("titre").value=""
    document.getElementById("contenu").value =""


    


}