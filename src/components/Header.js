import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h2 className="header-title">React Maps</h2>
            <nav className="navbar">
                <NavLink to="/GMap" className="navbar-item" activeClassName="is-active">Google Map</NavLink>
                <NavLink to="/LeafletMap" className="navbar-item" activeClassName="is-active">Leaflet Map</NavLink>
            </nav>
        </div>
        );
}

export default Header;