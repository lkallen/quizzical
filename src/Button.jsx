import Question from "./Question";
import { useEffect, useState } from "react";

export default function Button(props) {
    const text = props.text
    const isCorrect = props.isCorrect

    const [isClicked, setIsClicked] = useState(false)

    const styles = {
        backgroundColor: isClicked ? 
            (isCorrect ? "var(--medium)" : "var(--lightclear)") : "none"
    }

    function handleClick() {
        if (isClicked === false) {
            setIsClicked(true)
        } else {
            return
        }
    }

    return (
        <div>
            <button className="button"
                style={styles}
                onClick={() => handleClick()}
            >
                {text}
            </button>
            <h5>
                {isClicked ? 
                    (isCorrect ? "✓" : "✕") : ""}
            </h5>

        </div>
    )
}