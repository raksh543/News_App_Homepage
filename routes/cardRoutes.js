const mongoose = require('mongoose');
var express = require('express')
var router = express.Router()
const Card = mongoose.model('card');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


router.get(`/api/product`, async (req, res) => {
    // var card=new Card({
    //     category: "politics",
    //     heading:"politics",
    //     description: "This is news description"
    // })
    // card.save((err, result) => {
    //     if (err) {
    //         console.log("cant be saved")
    //     } else {
    //         console.log("save")
    //     }
    // })
    let cards = await Card.find();
    return res.status(200).send(cards);
});

router.post(`/api/product`, async (req, res) => {
    let card = await Card.create(req.body);
    
    return res.status(201).send({
    error: false,
    card
    })
})

router.put(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let card = await Card.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
    error: false,
    card
    })

});

router.delete(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let card = await Card.findByIdAndDelete(id);

    return res.status(202).send({
    error: false,
    card
    })

})

module.exports = router