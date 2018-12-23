import Phaser from 'phaser';

import Map from '../map/map';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {

  }

  create() {
    const map = new Map({
      scene: this,
      height: 10,
      width: 10,
      tileHeight: 128,
      tileWidth: 128,
    });

    this.objects = [];
    const ship = this.matter.add.sprite(100, 220, 'ships', 'ship (4).png');
    // this.bodyShape = {
    //   shape: {
    //       type: 'rectangle',
    //       height: 40,
    //       width: 32,
    //       x: 8,
    //       y: 4,
    //     }
    // };
    // this.sprite = config.scene.matter.add.sprite(config.x, config.y, config.key, config.frame, this.bodyShape);
    this.objects.push(ship);

    const { Vector } = Phaser.Physics.Matter.Matter;
    const direction = Vector.create(0, 1);
    const normal = Vector.normalise(direction);
    const forceMagnitude = 0.0001;
    const force = Vector.mult(normal, forceMagnitude);

    const sail = Vector.create(-1, 1);
    const sailNormal = Vector.normalise(Vector.perp(sail, true));
    const sailForce = Vector.mult(sailNormal, forceMagnitude);

    this.matter.world.on('beforeupdate', () => {
      this.objects.forEach((object) => {
        object.applyForce(sailForce);
        // TODO: Apply a maximum velocity somehow
        // TODO: Apply some friction from the water to slow down boat if sails put up
        // TODO: Apply a fraction of the force depending on the angle of the sails
        // TODO: Apply the force fraction in the direction of the sails
      });
    });
  }
}

export default MainScene;
