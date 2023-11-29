class personagem {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.golpe = ""
    }
    ataque() {
        switch (this.classe) {
            case "mago":
                this.golpe = "magia"
                break
            case "guerreiro":
                this.golpe = "espada"
                break
            case "monge":
                this.golpe = "artes marciais"
                break
            case "ninja":
                this.golpe = "shuriken"
        } return this.golpe
    }
    escrever() { 
        let golpe = this.ataque()
        console.log(`O ${this.classe} atacou usando ${golpe}`)
    }
}

let MeuPersonagemMago = new personagem("Lucas",18,"mago")
MeuPersonagemMago.escrever()


let MeuPersonagemGuerreiro = new personagem("Lucas",18,"guerreiro")
MeuPersonagemGuerreiro.escrever()


let MeuPersonagemMonge = new personagem("Lucas",18,"monge")
MeuPersonagemMonge.escrever()


let MeuPersonagemNinja = new personagem("Lucas",18,"ninja")
MeuPersonagemNinja.escrever()