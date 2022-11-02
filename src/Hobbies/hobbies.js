import React, {useContext} from "react";
import { ItemContext } from "../Landing/Landing";

const Hobbies = () => {
    const {hobbies} = useContext(ItemContext);

    return(
        <>
            {hobbies.length === 0 ? (
                <>
                <h3> Other interests and hobbies &#9968;</h3>
                <p> I have many different interests and hobbies that I can tell you about</p>
                <ol>
                    <li>No experience to show.</li>
                </ol>
                </>

            ) : (
                <>
                <h3> Other interests and hobbies &#9968;</h3>
                <p> I have many different interests and hobbies that I can tell you about</p>
                {
                    hobbies.map((listHobbies) => {
                        return(
                            <>
                            <ol>
                                <li>{listHobbies.hobbie}</li>
                                <ul>
                                    <li>{listHobbies.details}</li>
                                </ul>
                            </ol>
                            </>
                        );
                    })
                }
                </>
            )}
        </>
    );
};

export default Hobbies