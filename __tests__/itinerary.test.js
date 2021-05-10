const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("constructor function", () => {
  it("returns an object", () => {
    const Southampton = new Port("Southampton");
    const Dover = new Port("Dover");

    const itinerary = new Itinerary([Southampton, Dover]);

    expect(itinerary).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    const Southampton = jest.fn();
    const Dover = jest.fn();

    const itinerary = new Itinerary([Southampton, Dover]);

    expect(itinerary.ports).toEqual([Southampton, Dover]);
  });
});
