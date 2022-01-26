function Calculadora() {
    const display = document.querySelector('.display');

    this.inicia = () => {
        clickBtn();
        keyPressDgt();
    }; 
    
    clickBtn = () => {
        document.addEventListener('click', function(e) {
            const element = e.target;
            if (element.classList.contains('btnNum')) {
                display.innerText += element.innerText;
                display.focus()
            };
            if (element.classList.contains('btnClear')) {
                clearDisplay();
                display.focus()
            };
            if (element.classList.contains('btnDel')) {
                delLastDgt();
                display.focus()
            };
            if (element.classList.contains('btnEq')) {
                finishCalc();
                display.focus()
            };

        });
    };
    const clearDisplay = () => {
        display.innerText = '';
    };
    const delLastDgt = () => {
        display.innerText = display.innerText.slice(0, -1);
    };
    const finishCalc = () => {
        try {
            let conta = display.innerText
            conta = eval(conta)
            display.innerText = conta;
            if (isNaN(conta)) {
                display.innerText = 'Invalid result'
            }
        }catch(error) {
                display.innerText = 'Invalid result'
            }
    };

    const keyPressDgt = () => {
            document.addEventListener('keyup' , e => {
            const num = ['1', '2', '3','4', '5', '6','7', '8', '9', '+', '-', '(',')', '*', '/', '.', '0'] 
            for (let tecla of num) {
                if (e.key === tecla) display.innerText += e.key;
            };
            if (e.key === 'Enter') finishCalc();
            if (e.key === "Backspace") delLastDgt();
            if (e.key === "Delete") clearDisplay();
        })
    };
};

const init = new Calculadora()
init.inicia()
