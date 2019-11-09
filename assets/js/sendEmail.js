// adapted code of Code Institute (module "Sending emails using EmailJS", video "Sending emails!")
function sendMail(contactForm) {
    emailjs.send("gmail", "piano_game", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.yourmessage.value
    })
    .then(
        function(response) {            
            console.log("SUCCESS", response);
            alert("Thanks! \nYour email has been sent!");
            
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}