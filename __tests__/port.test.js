const Port = require("../src/port");

describe("port", () => {
  let port;

  beforeEach(() => {
    port = new Port("Dover");
  });

  describe("constructor function", () => {
    it("returns an object", () => {
      expect(port).toBeInstanceOf(Object);
    });
    it("has a name", () => {
      expect(port.portName).toBe("Dover");
    });

    describe("add ship", () => {
      it("can add a ship", () => {
        const ship = jest.fn();

        port.addShip(ship);

        expect(port).toBeInstanceOf(Object);
      });
      describe("remove ship", () => {
        it("can remove a ship", () => {
          const ship1 = jest.fn();
          const ship2 = jest.fn();
          const ship3 = jest.fn();

          port.addShip(ship1);
          port.addShip(ship2);
          port.addShip(ship3);
          port.removeShip(ship2);

          expect(port.ships).toEqual([ship1, ship3]);
        });
      });
    });
  });
});
