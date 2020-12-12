function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();   // Pega o ano atual do sistema.
    var fAno = document.querySelector('#AnoDeNascimento');   // getElementById('txtAno');
    var resultado = document.querySelector('div#resultado');

    if (fAno.value.length == 0 || fAno.value > anoAtual) {
        window.alert('[ERRO] - Verifique os dados e tente novamente.');
    } else {
        var formGenero = document.querySelectorAll('[name="genero"]');   
            // querySelectorAll para pegar uma propriedade específica como NAME. Geralmente usamos "#" para ID, e "." para classes, com "[]" podemos selecionar com base em algumas propriedades HTML [].
        var idade = anoAtual - Number(fAno.value);
        var genero = '';

        var img = document.createElement('img');    // Cria uma TAG <img> dinâmicamente.
        img.setAttribute('id', 'foto'); // Adiciona o atributo [ id="foto" ] à tag contida na var "img". Temos agora <img id="foto">

        // Vamos configurar a exibição dinâmica da imagem com base nos dados do formulário.
        if (formGenero[0].checked) {
            genero = "Homem"

                if (idade >= 0 && idade < 3){ // Bebê
                    img.setAttribute('src', './Imagens/bebe_homem.png')
                } else if (idade < 10){ // Criança
                    img.setAttribute('src', './Imagens/crianca_homem.png')
                } else if (idade < 21){ // Jovem
                    img.setAttribute('src', './Imagens/adolecente_homem.png')
                } else if ( idade < 50){    // Adulto
                    img.setAttribute('src', './Imagens/adulto_homem.png')
                } else if (idade < 120){    // Idoso
                    img.setAttribute('src', './Imagens/idoso_homem.png')
                } //else if (idade >= 120){   // Pós vida...
                //    img.setAttribute('src', './imagens/esqueleto_b.png')
                //}
        } else if (formGenero[1].checked) {
            genero = "Mulher"

                if (idade >= 0 && idade < 3){ // Bebê
                    img.setAttribute('src', './Imagens/bebe_mulher.png')
                } else if (idade < 10){ // Criança
                    img.setAttribute('src', './Imagens/crianca_mulher.png')
                } else if (idade < 21){ // Jovem
                    img.setAttribute('src', './Imagens/adolecente_mulher.png')
                } else if ( idade < 50){    // Adulto
                    img.setAttribute('src', './Imagens/adulto_mulher.png')
                } else if (idade < 120){    // Idoso
                    img.setAttribute('src', './Imagens/idoso_mulher.png')
                } //else if (idade >= 120){   // Pós vida...
                //    img.setAttribute('src', './_imagens/esqueleto_a.png')
                //}
        }

        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

        // Vamos fazer com que a imagem seja exibida. Adicionando ela abaixo do texto existente na div de ID "resultado".
        // Observação: Colocamos "appendChild" após "innerHTML" pois innerHTML substitui todo o conteúdo do elemento.
        resultado.appendChild(img); // Adicione o elemento Child chamado img no elemento Parent "resultado".
                                    // Adicione o elemento filho contido na var img ao pai chamado resultado.
                                    // Adicione o elemento interno contido na var img (<img>) ao elemento contido em resultado (<div>).


    }
}