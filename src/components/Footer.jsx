import {useState} from "react";
function Footer() {
const [mensagem, setMensagem] = useState("Promoção ativa! Aproveite o desconto." )
function trocarMensagem(){
setMensagem( mensagem === "Promoção ativa! Aproveite o desconto." ? "Preço atualizado para valor normal" : "Promoção ativa! Aproveite o desconto." )
}
    return (
        <footer>
            <p> {mensagem}  </p>
            <button onClick={trocarMensagem}> Trocar a mensagem </button>
        </footer>
    )
}
export default Footer