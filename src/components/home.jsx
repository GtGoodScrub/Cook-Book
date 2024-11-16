// import { Outlet, Link } from "react-router-dom";

export const Home = () => {
    return (<div>
        <img src={require("../images/CookBookLogo.png")} height={150} width={200} alt="cookbooklogo"/>
        <h1>Main</h1>

        <p>This will be a cook book web app</p>
        <p>Due date: Nov.28</p>
    </div>  );
}

export default Home;