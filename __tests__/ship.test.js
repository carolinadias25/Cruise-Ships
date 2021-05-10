const Ship = require("../src/ship");

describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    let ship;
    let Dover;
    let Southampton;
    let itinerary;

    beforeEach(() => {
      Southampton = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
        portName: "Southampton",
        ships: [],
      };
      Dover = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
        portName: "Dover",
        ships: [],
      };

      itinerary = { ports: [Southampton, Dover] };

      ship = new Ship(itinerary);
    });

    describe("constructor function", () => {
      it("can be instantiated", () => {
        expect(ship).toBeInstanceOf(Object);
      });
      it("has the given starting port", () => {
        expect(ship.currentPort).toBe(Southampton);
      });
      it("starts with a previous port property set to null", () => {
        expect(ship.previousPort).toEqual(null);
      });
      it("gets added to port on instantiation", () => {
        expect(Southampton.addShip).toHaveBeenCalledWith(ship);
      });
    });

    describe("setSail", () => {
      it("can set sail", () => {
        ship.setSail();

        expect(ship.currentPort).toBe(null);
        expect(ship.previousPort).toStrictEqual(Southampton);
        expect(Southampton.removeShip).toHaveBeenCalledWith(ship);
      });

      it("makes the ship be at sea", () => {
        ship.setSail();

        expect(ship.isAtSea).toBe(true);
      });
      describe("throws an error", () => {
        it("can dock at a diferrent port", () => {
          ship.setSail();
          ship.dock();

          expect(() => ship.setSail()).toThrowError("End of itinerary reached");
        });
      });
      describe("dock", () => {
        it("cant sail further than its itinerary", () => {
          ship.setSail();
          ship.dock();

          expect(ship.currentPort).toBe(Dover);
          expect(Dover.addShip).toHaveBeenCalledWith(ship);
        });
        it("is not at sea", () => {
          expect(ship.isAtSea).toBe(false);
        });
      });
    });
  });
});
