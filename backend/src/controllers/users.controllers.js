const db = require('../../config/db');
const bcrypt = require('bcrypt')

exports.register = async(req,res) => {
   // Extract data from the request body
   const { name, email, password } = req.body;
   
   // Check if all required fields are present
   if (!name || !email || !password) {
      res.status(400).json({ error: 'All fields are required' });
   }
  const password_hash = await bcrypt.hashSync(password,10)
   
  
   db('scholarship_finder.users')
   // Insert the new user into the database
     .insert({ name:name, email:email, password:password_hash })
     .then(() => {
       // Return success message
        res.status(200).json({ message: 'User registered successfully' });
     })
     .catch((error) => {
       console.log(error);
        res.status(500).json({ error: 'Internal server error' });
     });

}