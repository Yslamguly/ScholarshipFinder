const db = require('../../config/db');

exports.getUserWishList = (req,res)=>{
    const {user_id} = req.params

    if (isNaN(parseInt(user_id))) {
        res.status(400).json({ message: 'Invalid user_id' });
    }

    db.select('scholarship_finder.scholarships.id',
        'scholarship_finder.scholarships.title',
        'scholarship_finder.scholarships.description',
        'scholarship_finder.scholarships.deadline_date',
        'scholarship_finder.scholarships.link',
        'scholarship_finder.scholarships.image',
        'scholarship_finder.categories.name')
        .from('scholarship_finder.scholarships')
        .join('scholarship_finder.wish_list_item', function () {
            this.on(`scholarship_finder.wish_list_item.scholarship_id`, '=', `scholarship_finder.scholarships.id`)
        })
        .join('scholarship_finder.wish_list', function () {
            this.on(`scholarship_finder.wish_list_item.wish_list_id`, '=', `scholarship_finder.wish_list.id`)
        })
        .join('scholarship_finder.scholarship_category', function (){
            this.on('scholarship_finder.scholarships.id','=','scholarship_finder.scholarship_category.scholarship_id')
        })
        .join('scholarship_finder.categories',function(){
            this.on('scholarship_finder.scholarship_category.category_id','=','scholarship_finder.categories.id')
        })
        .where(`scholarship_finder.wish_list.user_id`, '=', user_id)
        .then(data => {
            console.log(data)
            data.length ? res.json(data) : res.status(200).json({message: 'You have no scholarship in your wishlist'})
        })
        .catch(err => res.status(500).json(err))
}

exports.deleteScholarshipFromWishList = async (req,res)=>{
    const {wish_list_item_scholarship_id} = req.body;

    const {user_id} = req.params;

    if (wish_list_item_scholarship_id === null) {
        res.sendStatus(400)
    }
    if(isNaN(parseInt(wish_list_item_scholarship_id))){
        res.status(400).json({ message: 'Invalid scholarship_id' });
    }
    if (isNaN(parseInt(user_id))) {
        res.status(400).json({ message: 'Invalid user_id' });
    }

    const wish_list_id = await db.select('id').from('scholarship_finder.wish_list').where('user_id', '=', user_id)


    db('scholarship_finder.wish_list_item')
        .where('wish_list_id', '=', wish_list_id[0].id)
        .andWhere('scholarship_id', '=', wish_list_item_scholarship_id)
        .del()
        .then(() => res.status(200).json({message: 'Scholarship has been deleted successfully'}))
        .catch(err => res.status(500).json({message:err}))
}
