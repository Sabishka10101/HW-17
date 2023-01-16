const Human = function (name, gender) {
    this.name = name;
    this.gender = gender;

    this.getInfo = function () {
        return this.name + " is a " + this.gender;
    };
};

const human1 = new Human("Vasil", "Male");
const human2 = new Human("Yulia", "Female");

console.log(human1.getInfo());

const Apartment = function () {
    this.inflatmates = [];
    this.addToRoom = function (inflatmate) {
        if (this.inflatmates) {
            return this.inflatmates.push(inflatmate);
        }
        return this.inflatmates;
    };
};

const flatmate1 = new Apartment();
const flatmate2 = new Apartment();
flatmate1.addToRoom(human1);
flatmate2.addToRoom(human2);
console.log(flatmate1);
console.log(flatmate2);

const House = function (roomsValue) {
    this.rooms = [];
    this.roomsValue = roomsValue;
    this.addToHouse = function (room) {
        if (this.rooms.length < this.roomsValue) {
            return this.rooms.push(room);
        } else {
            console.log("Look to see a lot of Apartments!");
        }
    };
};

const blockOFrooms = new House(1);
blockOFrooms.addToHouse(flatmate1);
blockOFrooms.addToHouse(flatmate2);
console.dir(blockOFrooms, { depth: 8 });