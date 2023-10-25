var express = require('express');

var router = express.Router();

var value;

/* GET home page. */

router.get('/', function(req, res, next) {

    fake_url = "https://fake.com/path" + req.url

      const url = new URL(fake_url)

      const search_params = url.searchParams

     value =Number(search_params.get("x"))

    if(value == 0)

    value=Math.random()

    res.write("Computes the values for Math.abs and math.sin function."+"\n")

    res.write('Math.atan2() applied to '+value+" is "+Math.atan2(value)+"\n");

    res.write('Math.atanh() applied to '+value+" is "+Math.atanh(value)+"\n");

    res.end('Math.cbrt() applied to '+value+" is "+Math.cbrt(value)+"\n");

 });



module.exports = router;