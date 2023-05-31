class verbale_obj {
    static n_verb = 0;

    constructor (targa, importo) {
        this.targa = targa;
        this.importo = importo;
        verbale_obj.n_verb += 1;
        this.numero = verbale_obj.n_verb;
    }

    get n_verbale() {
        return this.numero;
    }
}

class verbali_utility {

    static genVerbali() {
        var container = document.getElementById("display");
        var n_verbali = document.getElementById("num");

        if (/^[0-9]*$/.test(n_verbali.value)) {
            document.getElementById("send").classList.add("show");
        }

        for (let i=0; i<n_verbali.value; i++) {
            this.n_tot += 1;

            const verb = document.createElement('div');
            verb.classList.add('verbale');

            const targa_in = document.createElement('input');
            targa_in.type = "text";
            targa_in.placeholder = "TARGA";
            targa_in.classList.add("targa");
            verb.appendChild(targa_in);

            const importo_in = document.createElement('input');
            importo_in.type = "text";
            importo_in.placeholder = "IMPORTO";
            importo_in.classList.add("importo");
            verb.appendChild(importo_in);

            const n_verbale = document.createElement('p');
            n_verbale.innerText = "Verbale n." + (i+1);
            verb.appendChild(n_verbale);
            
            container.appendChild(verb);
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

        const verbali = document.getElementsByClassName('verbale');

        if (verbali.length == 0) {
            console.log("Non ci sono verbali inseriti");
        } else {
            for (const verbale of verbali) {
                
                const inputs = verbale.getElementsByTagName('input'); 

                let targa = inputs[0].value;
                let importo = inputs[1].value;

                let temp = new verbale_obj(targa, importo);
                
                console.log(temp);
                verbali_arr.push(temp);
            }

            var container = document.getElementById("display");
            container.innerHTML = "";
            document.getElementById("send").classList.remove("show");
        }
    }
}

var verbali_arr = new Array();

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