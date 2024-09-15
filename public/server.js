const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path'); // For better path handling

const app = express();
const port = 3000; // You can use any port you prefer

// Serve static files (e.g., HTML, CSS) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail', // Ensure this is correct or change to another provider if needed
    auth: {
        user: 'samianusrat789@gmail.com', // Your email address
        pass: 'fkgioxkiheaofyfy'  // Your app password
    }
});


// Route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Adjust the path as needed
});

// Handle form submissions
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'samianusrat789@gmail.com', // Your email address
        subject: `Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error.message); // More detailed error message
        res.status(500).send('Internal Server Error');
    } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    }
});

});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
