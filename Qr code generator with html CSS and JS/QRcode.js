let Image_Src =document.querySelector(".imgSrc");
let Boxtext = document.querySelector("Input");

 function QRcodGenerate() {
    if(Boxtext.value==""){
       document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".error").style.display="none";
    Image_Src.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+Boxtext.value;

    }
}