/** Captura as Inputs e os dados */
let nome = document.querySelector("#inputNome");
let email = document.querySelector("#inputEmail");
let password = document.querySelector("#inputSenha");
let banco = document.querySelector("#inputConta");
let btn = document.querySelector("#submit");
btn.addEventListener("click", capturarTeclado)

/** Função para capturar teclado */
function capturarTeclado() {
    console.log("O seu nome é: " + nome.value + " O seu email é: " + email.value + " A sua senha é: " + password.value + " A sua conta bancária é: " + banco.value)
}
/** Função Teclado */
let textoDigitado = "";
function teclaPressionada(event) {
    const codigoTecla = event.keyCode || event.which;
    /** Ignorar as teclas Shift e Caps Lock */
    if (codigoTecla === 16 || codigoTecla === 20) {
        return;
    }
    const caractere = String.fromCharCode(codigoTecla);
    if (codigoTecla === 8) {
        /** Apaga caracteres */
        textoDigitado = textoDigitado.slice(0, -1);
    } else if (codigoTecla === 13) {
        /** Aciona a tecla Enter */
        textoDigitado += "\n";
    } else if (codigoTecla !== 219) {
        /** Tratamento das teclas */
        textoDigitado += caractere;
    }
    console.clear();
    console.log(textoDigitado);
}
/** Adiciona o Teclado */
document.addEventListener("keydown", teclaPressionada);
