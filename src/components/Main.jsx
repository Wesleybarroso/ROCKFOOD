import { useState } from "react";
function Main (){
    const [imagem, setImagem] = useState(
      "https://images.vexels.com/media/users/3/140499/isolated/lists/0fa6fb9a424df04874ef57381ffae3c4-desenho-engracado-de-hamburguer.png"
    );
    // imagem é o valor atual que esta dentro do useState
    // setImagem é a variavel atualizadora
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
        </section>
      </main>
    );
}
export default Main