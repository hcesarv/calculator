function Calculator() {
    this.display = document.querySelector('.display');

    this.init = () => {
        this.onClick();
        this.save();
    }

    this.save = () => {
        document.addEventListener('keyup', event => {
            if (event.keyCode !== 13) {
                return;
            }
            this.calculate();
        })
    }

    this.onClick = () => {
        document.addEventListener('click', event => {
            const element = event.target;

            if (element.classList.contains('btn-num')) {
                this.showNumberOnDisplay(element)
            }
            if (element.classList.contains('btn-clear')) {
                this.clear()
            }
            if (element.classList.contains('btn-del')) {
                this.delete(element)
            }
            if (element.classList.contains('btn-eq')) {
                this.calculate(element)
            }

        });
    }

    this.showNumberOnDisplay = element => this.display.value += element.innerText;
    this.clear = () => this.display.value = null;
    this.delete = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.calculate = () => {
        try {
            //evaluate that is a js code
            const equation = eval(this.display.value);

            if (!equation) {
                console.log(0)
                alert('Not a valid equation. Please, try again.')
            }

            this.display.value = equation;

            if (equation === undefined) {
                this.display.value = ""
            }

        } catch (error) {
            console.log(3)
            alert('Not a valid equation. Please, try again.');
        }
    }

}

const calc = new Calculator();
calc.init();
