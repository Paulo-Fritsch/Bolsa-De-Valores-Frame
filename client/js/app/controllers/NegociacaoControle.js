class NegociacaoControle {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        let data = new Date(...this._inputData
            .value.split('-')
            .map(function(item, indice) {
                return item - indice % 2;
            })); 
        //Em tese, o conjunto em computação começa em 0, sendo assim
        // o valor 0 recebe janeiro e assim por diante, mas ñ é isso que 
        // queremos, então fazemos um map da função, e retornamos esse item 
        // com seu indice subtraindo, para sempre termos uma subtração em 
        // apenas nos meses...

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}