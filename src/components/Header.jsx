import '../styles/Header.css'
import Logo from '../assets/logo.png'

function Header () {

    return (
        <header>
            <img className='logo' src={Logo} alt="Logo de Sportsee" />
            <nav>
            <a href="#">Accueil</a>
            <a href="#">Profil</a>
            <a href="#">Réglages</a>
            <a href="#">Communauté</a>
            </nav>
        </header>
    )
}

export default Header 