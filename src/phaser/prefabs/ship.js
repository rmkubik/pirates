import Phaser from 'phaser';

class Ship {
  constructor({
    scene, x, y, key, frame, sail
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
    this.sprite = scene.matter.add.sprite(x, y, key, frame); //, this.bodyShape);
    this.sail = Vector.create(sail.x, sail.y);
  }
}

export default Ship;