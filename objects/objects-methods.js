let restaurant = {
    name: 'Unique',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize;
    },
    addParty: function(partySize){
        this.guestCount += partySize;
    }

}

restaurant.addParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));
