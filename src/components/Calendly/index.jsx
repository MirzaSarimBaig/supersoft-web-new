import React from 'react'
import { PopupButton } from "react-calendly";

const Calendly = () => {
    return (
        <div className="App">
            <PopupButton
                url="https://calendly.com/magentodeveloper1993"
                rootElement={document.getElementById("root")}
                text="Set a Demo Call"
                className='btn--base '
            />
        </div>
    )
}

export default Calendly