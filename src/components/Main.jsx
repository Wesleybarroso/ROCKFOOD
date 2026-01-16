import { useState } from "react";
function Main (){
    const [imagem, setImagem] = useState(
      "https://images.vexels.com/media/users/3/140499/isolated/lists/0fa6fb9a424df04874ef57381ffae3c4-desenho-engracado-de-hamburguer.png"
    );
    const [nome, setNome] = useState("X-Tudo");
    const [preco, setPreco] = useState("R$: 23,99");

    // Arrow function: const nomeDaFunao = () => {}
    // imagem é o valor atual que esta dentro do useState
    // setImagem é a variavel atualizadora
   
     const trocarImagem = () => {
    setImagem("https://cdn-icons-png.flaticon.com/256/5965/5965330.png")
  };

    const trocarNome = () => {
      setNome("X-Burger");
    };

    const trocarPreco = () => {
      setPreco("R$: 25,99");
    };

    return (
      <main>
        <section>
          <article>
            <img
              src="https://www.tendaatacado.com.br/dicas/wp-content/webp-express/webp-images/uploads/2022/06/como-fazer-batata-frita-topo.jpg.webp"
              alt=""
            />
            <h2>Batata Frita</h2>
            <h3>R$: 20,00</h3>
          </article>

          <article>
            <img
                src={imagem} alt=""/> 
            <h2>{nome}</h2>
            <h3>{preco}</h3>
            <button onClick={trocarImagem}>Trocar Imagem</button>
            <button onClick={trocarNome}>Trocar Nome</button>
            <button onClick={()=>{setPreco("R$: 11,47")}}>Trocar Preço</button>
          </article>
        </section>
      </main>
    );
}
export default Main