let btnsubmit = document.getElementById("btn"), 
    qrfinal = document.querySelector(".qrcode"),
    qr_canvas = document.querySelector("canvas"),
    user_input = document.getElementById("content"),
    download = document.getElementById('download');



    btnsubmit.addEventListener('click', function(e){
        e.preventDefault()

        if(user_input.value != ""){
            if(qrfinal.childElementCount == 0){
              genera(user_input);  
            } else { 
              qrfinal.innerHTML = "";          
              genera(user_input);
            }
          } else{
            qrfinal.style = "display none";
          }
    })

  function genera(user_input){
        qrfinal.style = "";
  
        const qrcode = new QRCode(qrfinal, {
          text: `${user_input.value}`,
          width: 450,
          height: 450,
          colorDark: "#000000",
          colorLight: "transparent",
          correctLevel: QRCode.CorrectLevel.H
        });

      }


      download.addEventListener('click', ()=>{
        let img = document.querySelector('.qrcode img');
    
        if(img !== null){
            let imgAtrr = img.getAttribute('src');
            download.setAttribute("href", imgAtrr);
        }
        else{
            download.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
        }
    });

     
