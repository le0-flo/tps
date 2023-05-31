class verbali_utility {
    static n_tot = 0;

    static genVerbali() {
        var container = document.getElementById("display");
        var n_verbali = document.getElementById("num");

        if (/^[0-9]*$/.test(n_verbali.value) && this.n_tot == 0) {
            document.getElementById("send").classList.add("show");
        }

        for (let i=0; i<n_verbali.value; i++) {
            this.n_tot += 1;
            container.innerHTML += '<div class="verbale"><input type="text" placeholder="TARGA" id="targa"/><input type="text" placeholder="IMPORTO VERBALE" id="importo"/><p>Verbale n.' + this.n_tot + '</p></div>';
        }

        n_verbali.value = "";
    }

    static clear() {
        var container = document.getElementById("display");
        container.innerHTML = "";
        this.n_tot = 0;
        document.getElementById("send").classList.remove("show");
    }

    static save() {
        var container = document.getElementById("display");
        container.innerHTML = "";
        document.getElementById("send").classList.remove("show");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("bottone_inserisci").addEventListener('click', function(){
        verbali_utility.genVerbali();
    });
});
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("clear").addEventListener('click', function(){
        verbali_utility.clear();
    });
});
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("send").addEventListener('click', function(){
        verbali_utility.save();
    });
});