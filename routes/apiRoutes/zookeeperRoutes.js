const {filterByQuery, findById, createNewZookeeper, validateZookeeper} = require('../../lib/zookeepers');
const {zookeepers} = require('../../data/zookeepers');
const { validateAnimal, createNewAnimal } = require('../../lib/animals');
const router = require('express').Router();

router.get('/zookeepers', (req, res) => {
    let results = zookeepers;

    if(req.query) {
        results = filterByQuery(req.query, results);
    }
    
    res.json(results);
});

router.get('/zookeepers/:id', (req, res) => {
    const result = findById(req.params.id, zookepers);
    if(result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/zookeepers', (req, res) => {
    req.body.id = animals.length.toString();

    if (!validateAnimal(req.body)) {

        res.status(400).send('The Zookeeper is not properly formatted');
    }else {
        const zookeeper = createNewAnimal(req.body, zookeepers);
        res.json(zookeeper)
    }
});

module.exports = router;