const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #74ebd5, #9face6);
            display: flex;
            height: 100vh;
            align-items: center;
            justify-content: center;
            margin: 0;
          }
          .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            text-align: center;
          }
          h1 {
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Welcome to Your Express App</h1>
          <p>Everything is working beautifully!</p>
        </div>
      </body>
    </html>
  `);
});


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
