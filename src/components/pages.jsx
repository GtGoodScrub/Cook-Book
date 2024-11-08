import { Outlet, Link} from "react-router-dom";

export const Home = () => {
    return (<div>
        <h1>Home</h1>
    </div>  );
}
export const About = () => {
    return (<div>
        <h1>About</h1>
        <Outlet/>
    </div>  );
}
export const Events = () => {
    return (<div>
        <h1>Events</h1>
    </div>  );
}
export const Products = () => {
    return (<div>
        <h1>Products</h1>
        <p>List of products</p>
        <ul>
            <li><Link to="1">Product 1</Link></li>
            <li><Link to="2">Product 2</Link></li>
            <li><Link to="3">Product 3</Link></li>
        </ul>
    </div>  );
}
 
export const Contact = () => {
    return (<div>
        <h1>Contact Us</h1>
    </div>  );
}

export const Services = () => {
    return ( <div>
        <h2>Services we offer..</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex vitae ipsam dicta beatae numquam? Optio, distinctio odit ipsum est placeat veniam hic voluptatem amet? Officia blanditiis magni incidunt in.</p>
    </div> );
}
export const History = () => {
    return ( <div>
        <h2>Our History</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex vitae ipsam dicta beatae numquam? Optio, distinctio odit ipsum est placeat veniam hic voluptatem amet? Officia blanditiis magni incidunt in.</p>
    </div> );
}
export const Locations = () => {
    return ( <div>
        <h2>Our Locations</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex vitae ipsam dicta beatae numquam? Optio, distinctio odit ipsum est placeat veniam hic voluptatem amet? Officia blanditiis magni incidunt in.</p>
    </div> );
}
 
 
