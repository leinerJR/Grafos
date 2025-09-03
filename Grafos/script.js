class Grafo {
  constructor() {
    this.vertices = []; // Lista de vértices
    this.listaAdyacencia = {}; // Representación con lista
  }

  // Agregar un vértice nuevo
  agregarVertice(vertice) {
    if (!this.vertices.includes(vertice)) {
      this.vertices.push(vertice);
      this.listaAdyacencia[vertice] = [];
    }
  }

  // Agregar una arista dirigida (origen -> destino)
  agregarArista(origen, destino) {
    if (this.vertices.includes(origen) && this.vertices.includes(destino)) {
      this.listaAdyacencia[origen].push(destino);
    } else {
      console.log("Error: uno de los vértices no existe");
    }
  }

  // Imprimir la lista de adyacencia
  mostrarListaAdyacencia() {
    console.log("Lista de Adyacencia:");
    for (let vertice of this.vertices) {
      console.log(`${vertice} -> ${this.listaAdyacencia[vertice].join(", ")}`);
    }
  }

  // Generar la matriz de adyacencia
  generarMatrizAdyacencia() {
    let n = this.vertices.length;
    let matriz = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      let origen = this.vertices[i];
      for (let destino of this.listaAdyacencia[origen]) {
        let j = this.vertices.indexOf(destino);
        matriz[i][j] = 1;
      }
    }
    return matriz;
  }

  // Imprimir la matriz de adyacencia
  mostrarMatrizAdyacencia() {
    let matriz = this.generarMatrizAdyacencia();
    console.log("Matriz de Adyacencia:");
    console.log("   " + this.vertices.join(" "));
    for (let i = 0; i < this.vertices.length; i++) {
      console.log(this.vertices[i] + " | " + matriz[i].join(" "));
    }
  }
}

// -------------------
// Ejemplo de uso
// -------------------

let grafo = new Grafo();

// Agregar vértices
grafo.agregarVertice("A");
grafo.agregarVertice("B");
grafo.agregarVertice("C");
grafo.agregarVertice("D");

// Agregar aristas dirigidas
grafo.agregarArista("A", "B");
grafo.agregarArista("A", "C");
grafo.agregarArista("B", "D");
grafo.agregarArista("C", "D");

// Mostrar representaciones
grafo.mostrarListaAdyacencia();
grafo.mostrarMatrizAdyacencia();