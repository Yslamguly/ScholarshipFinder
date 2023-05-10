const db = require('../../config/db');

exports.getUserWishList = (req,res)=>{
    const {user_id} = req.params

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
            this.on(`scholarship_finder.wish_list_item.wish_list_id`, '=', `scholarship_finder.scholarships.id`)
        })
        .join('scholarship_finder.scholarship_category', function (){
            this.on('scholarship_finder.scholarships.id','=','scholarship_finder.scholarship_category.scholarship_id')
        })
        .join('scholarship_finder.categories',function(){
            this.on('scholarship_finder.scholarship_category.category_id','=','scholarship_finder.categories.id')
        })
        .where(`scholarship_finder.wish_list.user_id`, '=', user_id)
        .then(data => {
            data.length ? res.json(data) : res.status(200).json({message: 'You have no scholarship in your wishlist'})
        })
        .catch(err => res.status(500).json(err))
}
