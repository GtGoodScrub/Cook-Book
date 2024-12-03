const About = () => {
    return (<div>
        <img src={require("../images/CookBookLogo.png")} height={150} width={200} alt="cookbooklogo"/>
        <h2>About George</h2>
        <img src={require("../images/GW.jpg")} height={200} width={200} alt="My Pic"/>
        <p>Hello There!  My name is George.  I'm a student at Douglas College working towards becoming a Software Engineer.</p>
        <p>Here's my email: georgejw555@gmail.com</p>

        <h2>About Junhee</h2>
        <img src={require("../images/JH.jpg")} height={250} width={200} alt="JH Pic"/>
        <p>Hello, I'm Junhee Cho, a Computer Systems and Information Studies student at Douglas College in Vancouver, focusing on software engineering, web development, and game development, with plans to graduate in 2025.</p>
        <p>Here's my email: choj28@student.douglascollege.ca</p>
    </div>  );
}

export default About;