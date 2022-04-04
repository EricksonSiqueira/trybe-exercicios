class Tv {
  private size: string;
  private resolution: string;
  private connections: string[];
  private connectedTo?: string;

  constructor(size: string, resolution: string, connections: string[], connectedTo?: string) {
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = connectedTo;
  }

  turnOn(): void {
    console.log(`Tamanho: ${this.size} \nResolução: ${this.resolution} \nConexões: ${this.connections}`);
  }

}

const tv1 = new Tv('48polegadas', 'Full HD', ['hdmi', 'displayport', 'vga']);
tv1.turnOn();