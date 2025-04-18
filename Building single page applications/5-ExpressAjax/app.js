const express = require('express');
const app = express();
const PORT = 3000;

//9
app.use(express.static('client'));

app.get('/math', (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    if (isNaN(x) || isNaN(y)) {
        return res.status(400).send('Invalid input');
    }
    const result = {
        sum: x + y,
        difference: x - y,
        product: x * y,
        quotient: x / y
    };
    res.json(result);
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});