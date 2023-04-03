const db = require('../../config/db');

exports.getScholarships = (req,res) => {

    db.select('*')
      .from('scholarship_finder.scholarships')
        .then((data) => {
        // Return success message
        res.status(200).json(data);
        })
      .catch((error) => {
        console.log(error);
         res.status(500).json({ message: 'Internal server error' });
        });
}

exports.getScholarshipsById = (req,res) => {

    const { id } = req.params;

        db.select('*')
          .from('scholarship_finder.scholarships')
          .where({ id: id })
          .then((data) => {
            // Return the scholarship data retrieved from the database
            if (data.length === 0) {
              return res.status(404).json({ message: 'Scholarship not found' });
            }
            res.status(200).json(data[0]);
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
          });
      
}

exports.getScholarshipByCategoryId = (req, res) => {

    const { category_id } = req.params;

    db.select('*')
        .from('scholarship_finder.scholarship_category')
        .where({ category_id })
        .then((data) => {
            // Return the scholarship data retrieved from the database
            if (data.length === 0) {
                return res.status(404).json({ message: 'Scholarship not found' });
            }
            res.status(200).json(data[0]);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        });

}
