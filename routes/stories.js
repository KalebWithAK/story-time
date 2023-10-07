const router = require('express').Router()

router.get('/', (req, res) => {
    return res.send('GET /stories')
})

router.get('/new', (req, res) => {
    return res.send('GET /stories/new')
})

router.post('/', (req, res) => {
    return res.send('POST /stories')
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    return res.send('GET /stories/' + id)
})

router.put('/:id', (req, res) => {
    const { id } = req.params

    return res.send('PUT /stories/' + id)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    return res.send('DELETE /stories/' + id)
})

module.exports = router