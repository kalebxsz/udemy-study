// METADOS DE INSTANCIA E ESTÁTICOS 

class ControleRemoto {
    constructor (tv){
        this.tv = tv;
        this.volume = 0;
    }
// metados de instacia 
    aumentar () {
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    // Metodos Estático utilizam static 
    // O metodo static não tem os dados da instacia 
    static trocaPilha(){
        console.log('Vou trocar a pilha');
        
    }


}

const controle1 = new ControleRemoto('Samsung')
controle1.aumentar()
controle1.aumentar()
controle1.aumentar()

console.log(controle1);

ControleRemoto.trocaPilha();
