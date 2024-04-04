function changetext(){
    const text = document.getElementById("Bonjour") //recuperer une balise grace a son id 
    console.log(text)
    text.innerHTML="HELLO EVERYBODY"//saiser le nouveau texte
}
const add=()=>{
    const div = document.getElementById("new")//recupirer une balise grace a son id 
    let paragraphe = document.createElement("p")// creer un paragraphe 
    let text = document.createTextNode("this is me") // creer un nouveau text 
    paragraphe.appendChild(text)//
    div.appendChild(paragraphe)//
}
const changeStyle = () =>{
    const parag =document.getElementById("changerStyle")
    parag.className="para"//apelle un la fon,ction 
}
const changer =()=>{
   document.querySelector(".changerCouleur").style.backgroundColor="purple"//recupirer une balise grace a ca classe 
}
const changerImage =()=>{
    document.getElementById("angryToHappy").src="./téléchargé.jfif"// afficher la nouvelle image 
}
