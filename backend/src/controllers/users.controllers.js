const db = require('../../config/db');
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    // Extract data from the request body
    const {name, email, password} = req.body;

    // Check if all required fields are present
    if (!name || !email || !password) {
        res.status(400).json({error: 'All fields are required'});
    }
    const password_hash = await bcrypt.hashSync(password, 10)

    await db.transaction(trx => {
        trx.insert({name: name, email: email, password: password_hash})
            .into('scholarship_finder.users').returning('*')
            .then(user => {
                return trx('scholarship_finder.wish_list')
                    .returning('*')
                    .insert({
                        user_id: user[0].id
                    }).then(() => {
                        res.status(200).json(user[0]);
                    }).catch((e) => {
                        console.log(e)
                        res.sendStatus(500)
                    }).then(trx.commit)
                    .catch(trx.rollback)
            }).catch(() => res.status(409).json({message: 'Email is invalid or already taken'}))
    })
}

exports.login = (req, res) => {
    // Extract data from the request body
    const {email, password} = req.body;

    // Check if all required fields are present
    if (!email || !password) {
        res.status(400).json({error: 'All fields are required'});
    }

    db.select('scholarship_finder.users.id',
        'scholarship_finder.users.name',
        'scholarship_finder.users.email',
        'scholarship_finder.users.password')
        .from('scholarship_finder.users')
        .where('email', '=', email)
        .then(async (data) => {
            const pass = data.length > 0 ? data[0].password : '';
            const isValid = await bcrypt.compareSync(password, pass);
            // Return success message
            if (isValid) {
                const responseData = {
                    id: data[0].id,
                    name: data[0].name,
                    email: data[0].email
                };
                res.status(200).json(responseData);
            } else {
                // console.log(error);
                res.status(400).json({error: 'Password is not valid'});
            }
        }).catch((error) => {
        console.log(error)
        res.status(500).json(error)
    })
}
