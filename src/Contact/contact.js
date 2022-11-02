import '../Landing/Landing.css';

const Contact = () => {
    return (
        <>
            <form class="contactform" method="post" enctype="text/plain">
                <h3> Contact me!</h3>
                <label for="fname">Your Name: </label>
                <input type="text" name="name"/><br/>
                <label for="fmail">Your Email: </label>
                <input type="email" name="email"/><br/>
                <label for="fcontact">Do you want to know more about me?</label>
                <input type="radio" id="yes" name="yes" value="yes" />
                <label for="undergrad">Yes</label>
                <input type="radio" id="no" name="no" value="no"/>
                <label for="undergrad">No</label><br/>
                <input class="submit" type="submit" value="Submit"/>
            </form>
        </>
    )
  };
  
  export default Contact;