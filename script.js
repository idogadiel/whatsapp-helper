function cleanNumber() {

    const orderedPrefixes = ["+", "972", "-", "0"];
    const generalChars = ["-"];
    const dirtyPhoneNumber = document.getElementById("phoneNumber").value;

    const phoneNumberWithoutPrefixes = orderedPrefixes.reduce((currentPhoneNumber, prefix) => {
        return currentPhoneNumber.startsWith(prefix) ? currentPhoneNumber.substring(prefix.length) : currentPhoneNumber;
    }, dirtyPhoneNumber);


    const cleanedPhoneNumber = generalChars.reduce((currentPhoneNumber, currentChar) => {
        return currentPhoneNumber.replace(currentChar, "")
    }, phoneNumberWithoutPrefixes);

    window.location.href = "https://api.whatsapp.com/send?phone=972" + cleanedPhoneNumber;
}