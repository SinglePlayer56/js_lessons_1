'use strict';
let calculator = {
      read() {
            this.a = +prompt('Введите число а:', '0');
            this.znak = prompt('Введите знак', '');
            this.b = +prompt('Введите число b', '0');
      },
      equals() {
            do {
                  switch (this.znak) {
                        case '+':
                              return this.a + this.b;
                        case '-':
                              return this.a - this.b;
                        case '*':
                              return this.a * this.b;
                        case '/':
                              return this.a / this.b;
                        default:
                              this.znak = prompt('Введите знак', '');
                  }
            } while (this.znak != '+' || this.znak != '-' || this.znak != '*' || this.znak != '/');
      },
};
calculator.read();
alert(calculator.equals());
