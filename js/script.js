window.addEventListener('load', () => {
    window.scrollTo(0, 0); // Scroll jusqu'en haut de la page
});

function emailSend() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var message = document.getElementById("message").value;

    var messageBody = "Nom" +  username  +
    "<br/> Email" +  email  +
    "<br/> Téléphone" +  tel  +
    "<br/><br/> Message" +  message;
    console.log(messageBody);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "noreplyfunboisson@gmail.com",
        Password : "A243F611042350BB1DEDB01E13F6E10603A7",
        To : 'funboisson@gmail.com',
        From : "noreplyfunboisson@gmail.com",
        Subject : "Client Fun Boissons",
        Body : messageBody
    }).then(
      message => {
        if (message === 'OK'){
            Swal.fire({
                icon: "success",
                title: "Thanks",
                text: "Your email was send!",
                timer: 3000,
                timerProgressBar: true
              });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                timer: 3000,
                timerProgressBar: true
              });
        }
      }
    );
}



function decreaseOpacityOnScroll(elementSelector) {
    const element = document.querySelector(elementSelector);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight * 0.65;
        const opacity = 1 - (scrollY / windowHeight);
        element.style.opacity = opacity.toFixed(2); // Arrondi à 2 décimales
    });
}

// Utilisation de la fonction avec un sélecteur d'élément (par exemple, 'h1')
decreaseOpacityOnScroll('h1');

function executeOnceAtScrollY(targetScrollY, callback) {
    let executed = false;

    window.addEventListener('scroll', () => {
        if (!executed && window.scrollY >= targetScrollY) {
            executed = true;
            callback(); // Exécutez votre fonction ici
        }
    });
}

function incrementH4Value(className, finalValue) {
    const element = document.querySelector(`.${className}`);
    let currentValue = parseInt(element.textContent, 10);

    const interval = setInterval(() => {
        currentValue += finalValue / 10; // Ajout de finalValue/10 à la valeur actuelle

        element.textContent = currentValue;

        if (currentValue >= finalValue) {
            clearInterval(interval);
            element.textContent = finalValue;
        }
    }, 150);
}

// Utilisation des deux fonctions ensemble
executeOnceAtScrollY(2930, () => {
    incrementH4Value("monH41", 3000);
    incrementH4Value("monH42", 8000);
    incrementH4Value("monH43", 650);
    incrementH4Value("monH44", 3600);
});



function handleScroll() {
    const navbars = document.getElementsByClassName("navbar");
    const fonds = document.getElementsByClassName("fond");

    for (const fond of fonds) {
        for (let i = 0; i < fonds.length; i++) {
            fonds[i].classList.remove("position");
        }
        switch (true) {

            case window.scrollY >= 0 && window.scrollY <= 720:
                fonds[0].classList.add("position");
                break;
                
            case window.scrollY > 720 && window.scrollY <= 1680:
                fonds[1].classList.add("position");
                break;

            case window.scrollY > 1680 && window.scrollY <= 3700:
                fonds[2].classList.add("position");
                break;

            case window.scrollY > 3700:
                    fonds[3].classList.add("position");
                    break;    
        }
    }
    function toggleNavbarClass() {
        for (const navbar of navbars) {
            if (window.scrollY > 720) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    }
    toggleNavbarClass();
}
document.addEventListener("scroll", handleScroll);


// SPIDE JS LIBRAIRIE
document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        height: "316px",
        type: "loop",
        perPage: 6,
        perMove: 1,
        autoplay: true,
        pagination: false,
        interval: 7000,
        speed: 2500,
        drag: true,
        pauseOnHover: false,
        arrows: false,
        snap: 1,
        easing: "ease 0.5s",
        gap: "5px",
    });
    splide.mount();
});

var rellax = new Rellax(".rellax");
