import { Link } from "react-router-dom";
import "./styles.css"
import { NavLink } from "react-router-dom";
import house_img from "../../../imgs/house.png"


export default function Header(){
    return<>
    <header className="rrs-header">
        <div className="rrc-inside-header">
            <nav className="rrc-header-nav">
                <NavLink to="/home" className={({isActive}) =>isActive ? "rrc-nav-link rrc-active-link" : " rrc-nav-link "   }>Inicio</NavLink>
                <NavLink to="/products" className={({isActive}) =>isActive ? "rrc-nav-link rrc-active-link" : " rrc-nav-link "   }>Produtos</NavLink>
                <NavLink to="/about" className={({isActive}) =>isActive ? "rrc-nav-link rrc-active-link" : " rrc-nav-link "   }>Sobre nós</NavLink>
            </nav>

            <Link to="/"><img src={house_img} alt="" /></Link>
        </div>
    </header>
    </>;
}