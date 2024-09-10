interface Image {
  src: string;
  size: {
    width: number;
    height: number;
  };
}

interface Position {
  lat: number;
  lng: number;
}

class Marker {
  id: number;
  image: Image;
  position: Position;

  constructor(id: number, image: Image, position: Position) {
    this.id = id;
    this.image = image;
    this.position = position;
  }
}

export default Marker;
