const router = require('express').Router();
const Rpl = require('../models/rpl');



router.get('/',async (req,res)=>{
    try{
        const data = await Rpl.find();
        res.send(data);
    }catch(err){
        res.send(err);
    }
})

router.post('/',async (req,res)=>{
    const rpl = new Rpl({
        nama: req.body.nama,
        absen: req.body.absen,
        kelas: req.body.kelas
    });
    try{
        const result =  await rpl.save();
        res.send(result)
    }catch(err){
        res.send(err);
    }

});

module.exports = router;
