import Logomarca from "../assets/logo.png"
function Header() {
    return (
      <header>
        <img
          src={Logomarca}
          alt="Logo do hambúrguer"
        />
        <h2>Rock Food</h2>
        <nav>
            <ul>
                <li>Cardápio</li>
                <li>Lançamentos</li>
                <li>Cupons</li>
            </ul>
        </nav>
      </header>
    );
}
export default Header