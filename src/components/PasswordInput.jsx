// PasswordInput component
// This component renders a password input field
// and tracks when the user types into the field.
function PasswordInput() {

    // Event handler for input changes
    // Logs a message whenever the user types in the password field
    function handleChange() {
        console.log('Entering password...')
    }
    return (
        <input
            type="password"
            onChange={handleChange}
        />
    )
}

export default PasswordInput;