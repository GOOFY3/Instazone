// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const superagent = require('superagent')

/*  This is a sample API route. */

router.get('/:username', (req, res) => {
  const url = 'https://www.instagram.com/natgeotravel/?__a=1'
  superagent.get(url)
  .query(null)
  .set('Accept', 'application/json')
  .end((err, response) => {
    if (err){
      res.json({
        confirmation:'fail',
        message: err.message
      })
      return
    }
    res.json(response.body)
  })

	// res.json({
	// 	confirmation: 'success',
	// 	username: req.params.username
	// 	// query: req.query // from the url query string
	// })
})


module.exports = router
