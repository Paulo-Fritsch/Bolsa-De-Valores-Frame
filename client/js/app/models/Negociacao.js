class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date (data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze (this);

    }

    // Encapsulando na convenção de colocar _ (underline), como var privadas
    get volume(){
        return this._quantidade * this._valor;  
    }
    get data(){
        return new Date(this._data.getTime());
    } // Criando uma data para ser imutável, programação defensiva

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    } 

    //getter

}