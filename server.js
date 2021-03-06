//const gm = require('gm');

// Parse incoming request bodies in a middleware before your handlers (to use req.body property)
const bodyParser = require('body-parser');
const fs = require('file-system');
const express = require('express');
const app = express();

app.listen(8070, () => console.log('Server is running, navigate to http://localhost:8070/'));
app.use(express.static('public'));
app.use(bodyParser.json({limit: '500mb'}));

// Listen to a POST request from the submit message button
app.post('/submit', (req, res) => {
  console.log(req.body);
  fs.appendFile('./public/submit.txt',
    `\n Name: ${req.body.name} Comment: ${req.body.message} \n`,
    function(err) { if (err) throw err; }); // must include cb at the end
  console.log('Message successfully saved to .public/submit.txt');
  res.send('Got the POST request!');
});

/*
// Listen to a POST request from the take photo button
app.post('/pics', (req, res) => {
  let picData = req.body.canvas.replace('data:image/png;base64,', '');
  let picPath = `/public/pics/${req.body.name}.png`;
  let memePath = `/public/memes/${req.body.name}.png`;

  // Add the pic into a folder called pics then generate the meme
  // and then add it into a folder called memes.
  fs.writeFile(picPath, picData, 'base64', () => {
    gm(picPath).fontSize(40).drawText(50, 50, req.body.comment).write(memePath, (err) => {
      console.log('Meme Error: ', err);
    });
  });
});
*/
