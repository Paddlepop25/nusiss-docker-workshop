const express = require('express');
const fortuneCookie = require('fortune-cookie');
const morgan = require('morgan');

// console.info(fortuneCookie.length); // 250

const randomCookies = () => {
  const indexOfCookie = Math.floor(Math.random() * fortuneCookie.length);
  return fortuneCookie[indexOfCookie];
};

// configuration
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

// create an instance of express
const app = express();

// use morgan to log all requests. use the 'combined' format
app.use(morgan('combined'));

app.get('/', (req, resp) => {
  resp.status(200);
  // the key is the Accept
  resp.format(
    {
      'text/html': () => {
        resp.send(`<h2>${randomCookies()}</h2>`);
      },
      'text/plain': () => {
        resp.send(randomCookies());
      },
      'application/json': () => {
        const text = randomCookies();
        resp.json(
          {
            cookieText: text,
            generatedOn: (new Date()).toDateString()
          }
        );
      },
      'default': () => {
        resp.status(406);
        resp.type('text/plain');
        resp.send(`Not supported: ${req.get("Accept")}`);
      }
    }
  );
});

// start the server
app.listen(PORT, () => {
  console.info(`Application started on port ${PORT} on ${new Date()}`);
});
