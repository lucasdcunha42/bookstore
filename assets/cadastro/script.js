var consultaCep = fetch('https://viacep.com.br/ws/01001250/json/')
.then(response => response.json())
.then(r => { 
    if(r.erro) {
        throw Error ('Esse CEP não existe');
    } else {
        console.log(r);
    }
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento Concluido'));

console.log(consultaCep);