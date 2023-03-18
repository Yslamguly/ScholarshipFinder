const db = require('../../config/db');



// test the connections
exports.test  = (req,res) =>{
    db.select('*').from('scholarship_finder.scholarships')
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    console.log(err);
  });
}