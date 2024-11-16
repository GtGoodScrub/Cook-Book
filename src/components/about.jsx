const About = () => {
    return (<div>
        <img src={require("../images/CookBookLogo.png")} height={150} width={200} alt="cookbooklogo"/>
        <h2>About George</h2>
        <img src={require("../images/GW.jpg")} height={200} width={200} alt="My Pic"/>
        <p>Hello There!  My name is George.  Something something backstory...</p>

        <h2>About Junhee</h2>
        <img src={require("../images/JH.jpg")} height={200} width={200} alt="JH Pic"/>
        <p>Hi! I'm Junhee.  ...</p>
    </div>  );
}

export default About;