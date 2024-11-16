const About = () => {
    return (<div>
        <img src={require("../images/CookBookLogo.png")} height={150} width={200} alt="cookbooklogo"/>
        <h2>About George</h2>
        <img src={require("../images/GW.jpg")} height={200} width={200} alt="My Pic"/>
        <p>Hello There!  My name is George.  I'm a student at Douglas College working towards becoming a Software Engineer.</p>
        <p>Here's my email: georgejw555@gmail.com</p>

        <h2>About Junhee</h2>
        <img alt="Junhee's Pic"/>
        <p>Hi! I'm Junhee.  ...</p>
    </div>  );
}

export default About;