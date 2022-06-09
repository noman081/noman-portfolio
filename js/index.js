const sendMail = () => {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "<sender’s email address>",
        Password: "<email password>",
        To: 'abdullahalnoman642@gmail.com',
        From: "abrayhan103@gmail.com",
        Subject: "Test",
        Body: "Test body",
    }).then(
        message => alert("mail sent successfully")
    );
}