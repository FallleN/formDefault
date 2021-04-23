const init = function() {

    const cep = document.getElementById("cep");
    const search = document.getElementById("search");
    const form = document.getElementById('myForm');

    search.addEventListener("click", function(event){
        const cepValue = cep.value;
        consultaCep( cepValue );
    });

    cep.addEventListener("keyup", function(e) {
        // alert(e.keyCode)
        var key = e.which || e.keyCode;
            if (key == 13) { // codigo da tecla enter
                // colocas aqui a tua função a rodar
                alert('carregou enter o valor digitado foi: ' +this.value);
            }
      });

    form.addEventListener('submit', function(e) {
        search(document.getElementById('myForm'));
        e.preventDefault();
    }, false);

    function consultaCep( cep ) {
        const url = `https://viacep.com.br/ws/${ cep }/json/`;
        
        fetch( url )
        .then(retorno => retorno.json())
        .then(result => console.log(result))
        .catch( erro => alert( "Ocorreu um erro" ))
    }

}