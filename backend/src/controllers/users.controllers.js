const db = require('../../database/db');

// test the connections
db.query('SELECT * FROM scholarship_finder.scholarships', (err, res) => {
    if (err) {
      console.error('Error connecting to the database', err);
    } else {
      console.log('Connected to the database at', res.rows[0]);
    }
    // Close the database connection
    db.end();
  });