let perguntas = [
    {
        titulo: 'Onde te pedi em namoro?',
        alternativas: ['Beira mar de SJ', 'Beira mar Continental', 'Paulo Lopes', 'Bolivia'],
        correta: 1
    },
    
    {
        titulo: 'Qual o modelo do meu carro?',
        alternativas: ['Civic', 'Santana', 'Golf', 'Brasilia'],
        correta: 2
    },
    
    {
        titulo: 'Top 3 da minha lista de comidas prediletas',
        alternativas: ['Parmegiana', 'Japa', 'Strogonoff', 'Pizza'],
        correta: 2
    },
    
    {
        titulo: 'Qual carro do meu sonho?',
        alternativas: ['Civic', 'Celta', 'nenhum', 'Civic Si vermelho'],
        correta: 3
    },
    
    {
        titulo: 'Qual esporte eu pratiquei?',
        alternativas: ['Volei', 'Skate', 'Handebol', 'Futsal'],
        correta: 1
    },
    
    {
        titulo: 'Qual meu filme favorito??',
        alternativas: ['Herbie', 'Barbie', 'Velozes & Furiosos', 'MIB'],
        correta: 2
    },
    
    {
        titulo: 'Qual faculdade eu faço??',
        alternativas: ['ADS', 'ADM', 'ENG SFT', 'MC CARLINHOS'],
        correta: 0
    },
    
    {
        titulo: 'Qual o meu nome completo??',
        alternativas: ['Rodrigo Perez Carvalho Goulart', 'Rodrigo Carvalho Goulart Perez', 'Rodrigo Carvalho Perez Goulart', 'Rodrigo Goulart Carvalho Perez'],
        correta: 2
    },
    
    {
        titulo: 'O que eu já quebrei?',
        alternativas: ['Dedo do pé', 'Cabeça', 'Dedo', 'Pulso'],
        correta: 0
    },
    
    {
        titulo: 'Qual faculdade quero fazer?',
        alternativas: ['Engenharia', 'Engenharia de Software', 'Medicina', 'Engenharia da computação (Vulgo = computaria)'],
        correta: 1
    },
    
    {
        titulo: 'Pronta para a pergunta mais importante?!',
        alternativas: ['Sim', 'Não', 'Talvez', '-'],
        correta: 0
    },
    
    
    ]
    
    let app = {
        start: function(){
            this.Atualpos = 0;
            this.Totalpontos = 0;
            this.Erros = 0;
    
            let alts = document.querySelectorAll('.alternativa');
            alts.forEach((element, index)=>{
                element.addEventListener('click', ()=>{
                    this.checaResposta(index);
                })
            })
            this.atualizaPontos();
            app.mostraquestao(perguntas[this.Atualpos]);
        },
    
        mostraquestao: function(q){
            this.qatual = q;
            //mostrando titulo
            let titleDiv = document.getElementById('titulo');
            titleDiv.textContent = q.titulo;
            //mostrando alternativas
            let alts = document.querySelectorAll('.alternativa');
            alts.forEach(function(element, index){
                element.textContent = q.alternativas[index];
            })
        },
    
        checaResposta: function(user){
            if(this.qatual.correta == user){
                console.log("Correto");
                this.Totalpontos++;
            }else{
                console.log("Errado");
                this.Erros++;
            }
            this.atualizaPontos();
            this.Proximaperg();
            this.mostraquestao(perguntas[this.Atualpos]);
        },
    
        Proximaperg: function(){
            this.Atualpos++;
            if(this.Atualpos == perguntas.length){
                if(this.Totalpontos == 11){
                    location.href = "/duwdwm/duwdwm.html";
                }else{
                    alert(`Tente novamente! Você errou um total de: ${this.Erros}`);
                    location.href = "/desafio/quiz.html";
                }
            }
        },
    
        atualizaPontos: function(){
            let scoreDiv = document.getElementById('pontos');
            if(this.Totalpontos >= 9)
            scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
        }
    
    }
    app.start();