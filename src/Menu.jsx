export default function Menu() {
    return (
        <div className="menu">
            <button 
                className="button"
                id="new-questions-button"
                onClick={() => window.location.reload(true)}
            >
                Get New Questions
            </button>
        </div>
    )
}