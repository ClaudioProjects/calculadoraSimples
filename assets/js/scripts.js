function criaCalculadora () {
    return {
        display: document.querySelector('.visor'),

        inicia() {
            this.clicaBotoes();
            this.keyPressDgt();
        },

        clicaBotoes() {
            document.addEventListener('click', function(e) {
                const element = e.target
                if (element.classList.contains('btnNum')) {
                    this.btnForDisplay(element.innerText);
                };
                if (element.classList.contains('btnClear')) {
                    this.clearDisplay();
                };
                if (element.classList.contains('btnDel')) {
                    this.delLastDigit();
                };
                if (element.classList.contains('btnEq')) {
                    this.realizaconta();
                };
            }.bind(this));
        },

        btnForDisplay(value) {
            this.display.innerText += value;
        },

        clearDisplay() {
            this.display.innerText = ' ';
        },

        delLastDigit() {
            this.display.innerText = this.display.innerText.slice(0, -1);
        },

        keyPressDgt() {
            document.addEventListener('keyup' , e => {
                const num = ['1', '2', '3','4', '5', '6','7', '8', '9', '+', '-', '(',')', '*', '/'] 
                for (let tecla of num) {
                    if (e.key === tecla){
                        this.display.innerText += e.key;
                    };
                };
                if (e.key === 'Enter'){
                    this.realizaconta();
                };
                if (e.key === "Backspace"){
                    this.delLastDigit();
                };
            })
        },

        realizaconta() {
            let conta = this.display.innerText;
            try {
                conta = eval(conta)
                this.display.innerText = conta

                if (isNaN(conta)) {
                    this.display.innerText = 'Conta invalida'
                    return
                }
            } catch(e) {
                this.display.innerText = 'Conta invalida';
                return
                }     
        },
    }
};

const calculadora = criaCalculadora();
calculadora.inicia();