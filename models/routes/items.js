const   Item        = require(global.appRoot+'/models/items')

module.exports =  {
    catalog: (req, res) => {
        'use strict'
        Item.find({}, (err, allItems) => {
            if (err) {
                console.log(err)
            } else {
                res.render('index', {catalog:allItems})
            }
        })
    },

    catalogNew: (req, res) => {
        'use strict'
        res.render('newItem.ejs')
    },
    catalogCreate: (req, res) => {
        'use strict'
        let name = req.body.name
        let image = req.body.image
        let description = req.body.description
        let newItem = { name:name, image:image, description:description}
        //add item to DB
        Item.create(newItem, (err, newItem) => {
            if (err) {
                console.log(err)
            } else {
                //redirect back
                res.redirect('/catalog')
                console.log(newItem)
            }
        })
    },

// Shows more info on an item
    catalogShow: (req, res) => {
        'use strict'
        Item.findOne({_id:req.params.id}).populate('reviews').exec((err, foundItem) => {
            if (err) {
                console.log(err)
            } else {
                res.render('show', {item:foundItem})
            }
        })
    }
}