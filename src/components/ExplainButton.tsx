import "../styles/ExplainButton.css"
import React, {useState} from "react";
import ExplainView from "../components/ExplainView"

function ExplainButton() {

    const [isModalOpen, setModalOpen] = useState(false);


    return(<div style={{display: "flex", alignItems: 'end', justifyContent: 'center'}}>
                <button className="explain-button" onClick={() => setModalOpen(true)}>Den Algorithmus erklären</button>
                <ExplainView isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
            </div>
    );

}

export default ExplainButton;