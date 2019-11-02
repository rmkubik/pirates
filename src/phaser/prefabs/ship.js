import Phaser from "phaser";

class Ship {
  constructor({
    scene,
    x,
    y,
    key,
    frame,
    sail,
    hullFrame,
    sailFrame,
    rudderFrame
  }) {
    const { Vector } = Phaser.Physics.Matter.Matter;
    // this.bodyShape = {
    //   shape: {
    //     type: 'rectangle',
    //     height: 40,
    //     width: 32,
    //     x: 8,
    //     y: 4,
    //   }
    // };
    this.shipParts = [];
    // this.sprite = scene.matter.add.sprite(x, y, key, frame); //, this.bodyShape);
    this.hullSprite = scene.matter.add.sprite(x, y, key, hullFrame);
    this.sailSprite = scene.add.sprite(x, y, key, sailFrame);
    this.rudderSprite = scene.add.sprite(x, y, key, rudderFrame);
    this.rudderSprite.setOrigin(0.95, 0.5);
    this.shipParts.push(this.hullSprite);
    this.shipParts.push(this.sailSprite);
    this.sail = Vector.create(sail.x, sail.y);

    this.rudderDirection; // controls rotation
    this.sailDirection; // controls speed
    this.shipDirection; // controls direction
  }

  update() {
    this.sailSprite.x = this.hullSprite.x;
    this.sailSprite.y = this.hullSprite.y;

    // this.sailSprite.angle =
    //   Math.atan2(this.sail.y, this.sail.x) * (180 / Math.PI);

    this.rudderSprite.x = this.hullSprite.x;
    this.rudderSprite.y = this.hullSprite.y - this.hullSprite.height / 2;

    const { Vector } = Phaser.Physics.Matter.Matter;

    const rudderDirection = Vector.perp(this.sail, true);
    this.rudderSprite.angle =
      Math.atan2(rudderDirection.y, rudderDirection.x) * (180 / Math.PI);
  }
}

export default Ship;
