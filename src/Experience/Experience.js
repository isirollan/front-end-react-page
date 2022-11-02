import React, {useContext} from "react";
import { ItemContext } from "../Landing/Landing";

const Experience = () => {
    const {listElement} = useContext(ItemContext);

    return(
        <>
            {listElement.length === 0 ? (
                <>
                <h3>Experience &#128187;</h3>
                <ul>
                    <li>No experience to show.</li>
                </ul>
                </>

            ) : (
                <>
                <h3>Experience &#128187;</h3>
                {
                    listElement.map((element) => {
                        return(
                            <>
                            <ul>
                                <li>{element.listElement}</li>
                            </ul>
                            </>
                        );
                    })
                }
                </>
            )}
        </>
    );
};

export default Experience