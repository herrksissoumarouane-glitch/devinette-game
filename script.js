let a = Math.floor(Math.random() * 90) + 10;
let nbrEssai = 10;
let history = [];

console.log("Nombre secret :", a);

function Essai() {
    if (nbrEssai <= 0) return;

    let choix = Number(document.getElementById("choix").value);
    let msg = document.getElementById("msg");

    if (!choix || choix < 10 || choix > 100) {
        msg.innerText = "Entrez un nombre entre 10 et 100 !";
        msg.style.color = "yellow";
        return;
    }

    history.push(choix);
    nbrEssai--;
    document.getElementById("essai").innerText = nbrEssai;

    if (choix === a) {
        msg.innerText = "Bravo ! Vous avez gagné ";
        msg.style.color = "lightgreen";
        disableInput();
        return;
    }

    if (choix > a) {
        msg.innerText = "Le nombre est plus petit ↓";
        msg.style.color = "orange";
    } else {
        msg.innerText = "Le nombre est plus grand ↑";
        msg.style.color = "orange";
    }

    if (nbrEssai === 0) {
        msg.innerText = "Vous avez perdu ";
        msg.style.color = "red";
        disableInput();
    }

    document.getElementById("choix").value = "";
    document.getElementById("choix").focus();
}

function disableInput() {
    document.getElementById("choix").disabled = true;
}

function showHistory() {
    let box = document.getElementById("historyBox");

    if (box.classList.contains("hidden")) {
        box.innerHTML = "<b>Historique :</b><br>" + history.join(" • ");
        box.classList.remove("hidden");
    } else {
        box.classList.add("hidden");
    }
}
