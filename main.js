  const heroi = {
    nome: 'Andre',
    idade: 33,
    tipo: 'ninja',

    atacar: function(){
        if ( this.tipo === 'mago') {
            ataque = "usou magia";
        }else if (this.tipo === 'guerreiro'){
            ataque = "usou espada";
        }else if (this.tipo === 'monge'){
            ataque = "usou artes marciais";
        }else if (this.tipo === 'ninja'){
            ataque = 'usou shuriken';
        }else{
            ataque = 'é uma classe inválida'
        }
        console.log(this.tipo +' '+ ataque);
    }
  }

heroi.atacar();