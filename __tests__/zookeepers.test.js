const fs = require('fs')
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require('../lib/zookeepers.js')

jest.mock('fs')

const { zookeepers } = require('../data/zookeepers')

test('creates a zookeeper object', () => {
    const zookeeper = createNewZookeeper(
        { name: 'Mary', age: 23 },
        zookeepers
    );

    expect(zookeeper.name).tobe('mary');
    expect(zookeeper.age).tobe('23');
});

test('filters by query', () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
        },
        {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
        },
    ];

    const updatedZookeepers = filterByQuery({ species: 'gorilla' }, startingZookeepers);
    expect(updatedZookeepers.length).toEqual(1);
});

test('finds by id', () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
        },
        {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
        },
    ];

    const result = findById('2', startingZookeepers);

    expect(result.name).toEqual('Erica');
});

test('validate age', () => {
    const zookeeper = {
        id: "2",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin",
    };

    const invalidZookeeper = {
        id: "3",
        name: "Isabella",
        age: "67",
        favoriteAnimal: "bear",
    };

    const result = validateZookeeper(zookeeper)
    const result2 = validateZookeeper(invalidZookeeper)

    expect(result).toBe(true);
    expect(result2).toBe(false);

});
