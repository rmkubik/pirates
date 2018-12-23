class Map {
  constructor({ scene, height, width, tileHeight, tileWidth }) {
    this.tiles = [];
    for (let row = 0; row < height; row++) {
      this.tiles.push([]);
      for (let col = 0; col < width; col++) {
        this.tiles[row].push({
          x: col,
          y: row,
          value: 72,
        });
      }
    }

    this.tiles.forEach(
      (row) => row.forEach(
        ({ x, y, value }) => scene.add.sprite(
          x * tileWidth,
          y * tileHeight,
          'tiles',
          value,
        )
      )
    );
  }
}

export default Map;
