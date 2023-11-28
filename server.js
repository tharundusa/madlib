const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Serve static files (e.g., HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Define route for '/index.html'
app.get('/itc505/homework/lab7', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Define route for handling POST requests
app.post('/itc505/homework/lab7', (req, res) => {
    const { verbIng, noun, partOfBody, verb, animal, verbEd } = req.body;
  
    // Your Mad Lib template
    const madLib = `
        <p>
        Once upon a time, the ${animal} was ${verbIng} through the enchanted forest. Its ${partOfBody} was adorned 
        with a ${noun} charm that emitted a magical glow.In the mystical land of ${noun}s, a wise ${animal} spent its days ${verbIng} and sharing ancient tales with curious travelers. Legends spoke of its incredible ${partOfBody} and the ${verbEd} adventures it undertook.,A curious explorer encountered a mysterious ${noun} guarded by a playful ${animal}. To unlock its secrets,the adventurer had to perform a ${verb} dance with the creature, involving intricate moves of the ${partOfBody}.,The breathtaking landscape of rolling hills and valleys echoed with the ${verbIng} sounds of a ${noun} and a ${animal} harmonizing. Their collaboration created a mesmerizing melody that resonated in the hearts of 
        all who listened.,As the stars twinkled above, the graceful ${animal} gracefully ${verbEd} across the moonlit meadow. Its ${partOfBody} shimmered in the soft glow, revealing a tale of timeless elegance and silent beauty.
        </p>
    `;
  
    // Send the HTML response
    res.send(`<p>${madLib}</p>`);
  });


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
