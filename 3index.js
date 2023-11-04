class Heroi {
  
    constructor(nome, idade, tipo) {
     
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    
    atacar() {
     
      let ataque;
     
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou algo desconhecido";
      }
      
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
 

  let Vortrox = new Heroi(" Vortrox", 29, "ninja");
  
  
  Vortrox.atacar();