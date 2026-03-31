const express = require('express');

const app = express();
// mocking Data
const blogs = [
  {
    title: 'Email Injection Attack',
    snippet: 'Bug Bounty writeup about an email injection attack'
  },
  {
    title: 'Race condition Bug that break the 1 limit',
    snippet: 'This bug can lead to a big financial lose'
  },
  {
    title: 'Information Disclosure',
    snippet: 'A Low level user can enumerate all emails of workspace members'
  }
]

// register a view engine (ejs)
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

app.get('/', (req, res)=> {
  res.render('index', { title: 'Home', blogs});
})

app.get('/about', (req, res)=> {
  res.render('about', {title: 'About'});
})

app.get('/blogs/create', (req, res)=> {
  res.render('create', {title: 'Create a New Blog'});
})

app.use((req, res) => {
  res.status(404).render('404', {title: '404'});
})


