const mongoose = require('mongoose')
const Item = require('./models/items')
const Review = require('./models/reviews')

let data = [
    {
        name: 'Мыло хозяйственное',
        image: 'http://gelmintov.net/wp-content/uploads/2016/08/hozyajstvennoe-mylo.jpg',
        description: 'Обычное колючее мыло',
    },
    {
        name: 'Мыло уходовое',
        image: 'http://oilsoap.ru/wa-data/public/shop/products/98/06/698/images/1005/1005.970.jpg',
        description: 'Мягкое мыло',
    },
    {
        name: 'Мыло банное',
        image: 'https://cdn2.imgbb.ru/user/108/1080737/201610/8be676975233bbab8663a46b2bf35885.jpg',
        description: 'Щиплет глаза',
    },
    {
        name: 'Стиральный порошок',
        image: 'https://ozon-st.cdn.ngenix.net/multimedia/audio_cd_covers/1008854863.jpg',
        description: 'Закинь в стиральную машину и, - готово!',
    },
    {
        name: 'Детский стиральный порошок',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMqP6Kd732oLHtRSODOhdMB4XbP2jqKOjqtRpFC9V0tShnYc',
        description: 'Порошок для мягкой стирки',
    }
]
const seedDB = () => {
    // remove all items
    Item.remove({}, (err) => {
        'use strict'
        if (!err) {
            Review.remove({}, (err) => {
                if (!err) {

                    console.log('removed everything')

                    //add new items
                    data.forEach((seed) => {
                        Item.create(seed, (err, item) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log('added item')
                                //make a review
                                Review.create({
                                    text: "Отличный товар, рекомендую!",
                                    author: "Светлана"
                                }, (err, review) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        //add review to an item
                                        item.reviews.push(review)
                                        item.save()
                                        console.log('added a review')
                                    }
                                })
                            }
                        })
                    })
                }
            })
        }
    })
}

module.exports = seedDB