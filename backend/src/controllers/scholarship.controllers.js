const db = require('../../config/db');

exports.getScholarships = (req,res) => {


  db.select(
    'scholarship_finder.scholarships.id',
    'scholarship_finder.scholarships.title',
    'scholarship_finder.scholarships.description',
    'scholarship_finder.scholarships.deadline_date',
    'scholarship_finder.scholarships.link',
    'scholarship_finder.scholarships.image',
    'scholarship_finder.categories.name'
  )
  .from('scholarship_finder.scholarships')
  .leftOuterJoin('scholarship_finder.scholarship_category', 'scholarship_finder.scholarships.id', '=', 'scholarship_finder.scholarship_category.scholarship_id')
  .leftOuterJoin('scholarship_finder.categories', 'scholarship_finder.scholarship_category.category_id', '=', 'scholarship_finder.categories.id')
    .then((data) => {
    // Return success message
    res.status(200).json(data);
    })
    .catch((error) => {
    console.log(error);
     res.status(500).json({ message: 'Internal server error' });
    });
  
    // db.select('*')
    //   .from('scholarship_finder.scholarships')
    //     .then((data) => {
    //     // Return success message
    //     res.status(200).json(data);
    //     })
    //   .catch((error) => {
    //     console.log(error);
    //      res.status(500).json({ message: 'Internal server error' });
    //     });
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

    const { categoryId } = req.params;

    db.select(`scholarship_finder.scholarships.id`,
        `scholarship_finder.scholarships.title`,
        `scholarship_finder.scholarships.description`,
        `scholarship_finder.scholarships.link`,
        `scholarship_finder.scholarships.image`,
        `scholarship_finder.scholarships.deadline_date`,`scholarship_finder.categories.name`)
        .from('scholarship_finder.scholarships')
        .leftJoin('scholarship_finder.scholarship_category',function (){
            this.on('scholarship_finder.scholarship_category.scholarship_id','=',`scholarship_finder.scholarships.id`)}
        ).leftJoin('scholarship_finder.categories',function (){
        this.on('scholarship_finder.categories.id','=','scholarship_finder.scholarship_category.category_id')
    })
      // changed so we return the specific id and all category scholarships
        .whereIn('scholarship_finder.scholarship_category.category_id', [categoryId, 4])
        // .where('scholarship_finder.scholarship_category.category_id','=',categoryId)
        .then((data)=>res.send(data))
        .catch((e)=>res.send(e))
}

exports.getRandomScholarships = (req,res) => {


  db.select('*').from('scholarship_finder.scholarships')
  .orderByRaw('RANDOM()')
  .limit(3) // Replace `10` with the number of rows you want to select
  .then(data => {
    res.status(200).json(data);
  })
  .catch((error) => {
    console.log(error);
     res.status(500).json({ message: 'Internal server error' });
    });
}