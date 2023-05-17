window.onload = function() {
    alert("Benvenuto nel sito di EAGE - European Association Generation Excellentia!");

    var image = document.getElementById('main-image');

    image.onmouseover = function() {
        this.classList.add('enlarge');
    }

    image.onmouseout = function() {
        this.classList.remove('enlarge');
    }

    image.onclick = function() {
        window.location.href = 'progetto.html'; // Sostituisci con l'URL della tua pagina di dettaglio
    }
}

function changeColor(element) {
    element.style.color = "#FF0000"; // Cambia il colore del testo in rosso
}

function resetColor(element) {
    element.style.color = "#FFFFFF"; // Resetta il colore del testo a bianco
}

