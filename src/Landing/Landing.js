import './Landing.css';
import Experience from '../Experience/Experience';
import { useEffect, useState, createContext } from 'react';
import {useNavigate} from 'react-router-dom';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const jsonElements = require('../Experience/data.json');

export const ItemContext = createContext()

function Landing() {
    
    const[listElement, setElement] = useState([]);
    
    useEffect(() => {
        setElement([...jsonElements])
    }, []);

    const navigate = useNavigate();
    const contactNav = () => {
        navigate("/contact");
    };

    return (
        <>
            <ItemContext.Provider
                value={{
                    listElement,
                    setElement,
                }}
            >

                <div class="header" role="banner">
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </div>
                <div class="Introduction">
                    <h1>Welcome to Isidora Rollán's site</h1>
                    <h2>This is a site where you can know me a little more!</h2>
                </div>


                <div class="image1">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGS0WUGaLw3_Q/profile-displayphoto-shrink_800_800/0/1662505938349?e=1668038400&v=beta&t=qKYGSX8EEebhBPsZRsJIkkxatrvs_7cULDvEp275UJE" alt="Isidora Rollan profile picture"
                    width="80%"
                    height="80%"/>
                    <h4> This is me </h4>
                </div>
                <div class="experience">
                    <Experience/>
                </div>

                <hr class="between"/>

                <div class="image2">
                    <img src="isi_bici.jpg" width="100%" height="100%"/>
                    <h4>This is me in my last Enduro competition <span class="material-icons">directions_bike</span></h4>
                </div>

                <div class="hobbies">
                    <h3> Other interests and hobbies &#9968;</h3>
                    <p> I have many different interests and hobbies that I can tell you about</p>
                    <ol>
                        <li>I love Mountainbiking, specially Enduro (downhill).
                            <ul>
                                <li>You can check my instagram profile <a href= "https://www.instagram.com/hey_rollan/">here</a> (and follow me!).</li>
                            </ul>
                        </li>
                        <br/>
                        <li>I love art specially portrait drawing, freestyle embroidery and watercolors <span class="material-symbols-outlined">
                            brush
                            </span>.
                            <ul> 
                                <li>You can check more of my artwork <a href="https://www.instagram.com/sinistram_art/">here</a>
                                </li>
                            </ul>
                        </li>
                        <br/>
                        <li>I am learning to code <span class="material-symbols-outlined">code</span>: 
                            <ul>
                                <li> In python</li>
                                <li> In front-end languages as HTML, CSS, Java and React.</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <hr class="between"/>
                <div className='contactForm'>
                    <button onClick={contactNav}>Contact Me</button>
                </div> 
            </ItemContext.Provider>
        </> 
    );
};

export default Landing;