// SubmitButton component
// This component renders a submit button
// and tracks mouse movement over the button.
function SubmitButton() {

    // Event handler for mouse entering the button
    function handleEnter() {
        console.log("Mouse Entering")
    }

    // Event handler for mouse leaving the button
    function handleLeave() {
        console.log("Mouse Exiting")
    }
    return (
        <button
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            Submit Password
        </button>
    )
}

export default SubmitButton;