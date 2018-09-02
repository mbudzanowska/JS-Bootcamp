const data = {
    locations: [],
    get location () {
        return this.locations;
    },

    set location(value) {
        value = value.trim();
        this.location.push(value.trim());
    }
}

// code that uses the data object
data.location = 'Philadelphia'
data.location = 'New York'
console.log(data.location)