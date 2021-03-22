import { NavLink } from 'react-router-dom';

const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/cats">Cats</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/dogs">Dogs</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/parrots">Parrots</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/reptiles">Reptiles</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/other">Other</NavLink></li>
            </ul>

            {/* NavLink auto makes activClassName="actve". We can use it :) */}

            <style jsx>
                {`
                .nav-link-selected{
                    background-color: lightGreen !important; //this is not good to do ('!important)
                }
                `}
            </style>
        </nav>
    )
}

export default CategoryNavigation;