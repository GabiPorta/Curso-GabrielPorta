const Nav = (props) =>{
    return (
        <nav>
            <div className="holeder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/especies">Especies</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>

            </div>
        </nav>
    );
}

export default Nav;