class Ship {
  constructor({
    scene, x, y, key, frame
  }) {
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
  }
}

export default Ship;