import './Footer.css';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='Footer-content'>
                <p>© {new Date().getFullYear()} Luis Tapari. Todos los derechos reservados.</p>
                <p>Desarrollado por Luis Tapari</p>
            </div>
        </footer>
    );
}

export default Footer;
