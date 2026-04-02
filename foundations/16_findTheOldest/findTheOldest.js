const findTheOldest = function(people) {
    return people
        .map(person => {
            const deathYear = person.yearOfDeath || new Date().getFullYear();
            return {...person, age: deathYear - person.yearOfBirth};
        })
        .reduce((oldest, current) => current.age > oldest.age ? current : oldest);
};

// Do not edit below this line
module.exports = findTheOldest;

// Do not edit below this line
module.exports = findTheOldest;
