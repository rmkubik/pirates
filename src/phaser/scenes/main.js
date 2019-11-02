import Phaser from "phaser";

import Map from "../map/map";
import Ship from "../prefabs/ship";

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }

  preload() {}

  create() {
    const map = new Map({
      scene: this,
      height: 10,
      width: 10,
      tileHeight: 128,
      tileWidth: 128
    });

    this.objects = [];
    this.objects.push(
      new Ship({
        scene: this,
        x: 100,
        y: 220,
        key: "ships",
        frame: "ship (4).png",
        hullFrame: "hullLarge (1).png",
        sailFrame: "sailLarge (10).png",
        rudderFrame: "wood (4).png",
        sail: { x: -1, y: 1 }
      })
    );
    this.objects.push(
      new Ship({
        scene: this,
        x: 560,
        y: 220,
        key: "ships",
        frame: "ship (5).png",
        hullFrame: "hullLarge (1).png",
        sailFrame: "sailLarge (11).png",
        rudderFrame: "wood (4).png",
        sail: { x: -1, y: 0 }
      })
    );

    const { Vector } = Phaser.Physics.Matter.Matter;
    const direction = Vector.create(0, 1);
    const normal = Vector.normalise(direction);
    const forceMagnitude = 0.0001;
    const force = Vector.mult(normal, forceMagnitude);

    this.matter.world.on("beforeupdate", () => {
      this.objects.forEach(object => {
        const sailNormal = Vector.normalise(Vector.perp(object.sail, true));
        const sailForce = Vector.mult(sailNormal, forceMagnitude);
        // object.shipParts.forEach(sprite => sprite.applyForce(sailForce));
        object.hullSprite.applyForce(sailForce);
        // TODO: Apply a maximum velocity somehow
        // TODO: Apply some friction from the water to slow down boat if sails put up
        // TODO: Apply a fraction of the force depending on the angle of the sails
        // TODO: Apply the force fraction in the direction of the sails
      });
    });
  }

  update() {
    this.objects.forEach(object => object.update());
  }
}

export default MainScene;
