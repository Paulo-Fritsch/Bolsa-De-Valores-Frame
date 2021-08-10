class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes() {
    
        return [].concat(this._negociacoes);
    } // Programação defensiva para manter na lista o array original
     // enviando uma cópia para o controle
}
