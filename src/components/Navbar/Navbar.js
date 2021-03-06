import logoImg from '../../assets/logo.png';
import Carticon from '../CartIcon/CartIcon';

export default function Navbar(){
    const linkstyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        listStyle: "none"
    }
    return(
        <header className="header">
            <Carticon count={2} />
            <div className="logo">
                <img alt="logo" src={logoImg}/>
            </div>
            <ul className="links" style = {linkstyle}>
                <li>Inicio</li>
                <li>Vuelos Domesticos</li>
                <li>Vuelos Internacionales</li>
                <li>Alojamiento</li>
                <li>Quienes Somos</li>
                <li>Contactanos</li>
                <li>Login</li>
            </ul>
        
        </header>
    );
}