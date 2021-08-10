class DateHelper {

    constructor(){
        throw new Error('Classe não é instanciavel');
    } // Arremessa um erro para o dev.

    static dataTexto (data){
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
        
    }

    static textoData (texto){
        return new Date(
            ...texto.split('-')
            .map((item,indice) => item - indice % 2));
             
            // Spread operator do ES6 Usamos '...' antes 
            // do array passado como parâmetro.Cada item do 
            // array será passado para cada parâmetro
            // recebido pela função. Inclusive isso vale para 
            // o constructor de uma classe.
        ; 
    }   
            //Em tese, o conjunto em computação começa em 0, sendo assim
            // o valor 0 recebe janeiro e assim por diante, mas ñ é isso que 
            // queremos, então fazemos um map da função, e retornamos esse item 
            // com seu indice subtraindo, para sempre termos uma subtração em 
            // apenas nos meses...


}