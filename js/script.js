function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        alert("Suscrito a Nikelao");
        document.form1.text1.focus();
        return true;
    }
    else{
        alert("¡Has ingresado una dirección de correo electrónico no válida!");
        document.form1.text1.focus();
        return false;
    }
}


//PABLO

const card = document.getElementById("card-gradient");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const angle = Math.atan2(-x, y);
    card.style.setProperty("--rotation", angle + "rad");
});