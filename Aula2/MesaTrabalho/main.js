let opcaoUsuario
let opcaoPc
let pontuacaoUsuario = 0
let pontuacaoPc = 0

const opcoes = ['pedra', 'papel','tesoura'];
let ganhador;

function pedirOpcao(){

    const numero = prompt(' Escolha pedra (1), papel (2) ou tesoura (3) ');
    opcaoUsuario = opcoes[numero -1];
    if(opcaoUsuario == undefined){
        alert (' Foi digitado um valor incorreto para o jogo')
        throw new Error();
    }
}

function escolherOpcao(){
    const random = parseInt(Math.random()*3);
    opcaoPc = opcoes[random];
}

function calcularGanhador(){

    switch (opcaoUsuario){
        case opcaoPc:
            ganhador = ' Nehum! aconteceu um emmpate.';
            break;
        
        case 'pedra':
            if (opcaoPc == 'tesoura'){
                ganhador = 'Você';
                pontuacaoUsuario += 1

            } else {
                ganhador = "PC";
                pontuacaoPc +=1
            }
            break;

            case 'papel':
            if (opcaoPc == 'pedra'){
                ganhador = 'Você';
                pontuacaoUsuario += 1
                console.log(pontuacaoUsuario)

            } else {
                ganhador = "PC";
                pontuacaoPc +=1
                console.log(pontuacaoPc)
            }
            break;

            case 'tesoura':
            if (opcaoPc == 'papel'){
                ganhador = 'Você';
                pontuacaoUsuario += 1
                console.log(pontuacaoUsuario)
                
            } else {
                ganhador = "PC";
                pontuacaoPc +=1
                console.log(pontuacaoPc)
            }

            break;
        }
    }

function resultadoRodada(){
    alert(' Você escolheu ' + opcaoUsuario +' e o PC  ' + opcaoPc + ', O ganhador é '+ ganhador)
}

function mostrarGanhador(){

        if (pontuacaoPc == 2){
            alert((' O computador ganhou o jogo! '))
        } if (pontuacaoUsuario ==2){
            alert(' Você é o ganhador do jogo! ')
        }
        if (pontuacaoUsuario != 2 && pontuacaoPc !=2){
            alert(' Não tivemos nenhum ganhador nestas 3 rodadas! ')
        }

}

for ( let i=0; i<3; i++){
    pedirOpcao();
    escolherOpcao();
    calcularGanhador();
    resultadoRodada();
}

mostrarGanhador();
