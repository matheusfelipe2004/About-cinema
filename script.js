let filmes = [
    {
        titulo : "Interstellar",
        ano : "Ano: 2014",
        genero : "Gênero: Sci-fi",
        descricao : "Interstellar é uma epopeia cinematográfica que nos leva a uma jornada épica pelo cosmos. Em um futuro próximo, a Terra se torna inabitável e um grupo de astronautas embarca em uma missão para encontrar um novo lar para a humanidade.",
        link : "https://www.rottentomatoes.com/m/interstellar_2014",
        tag : "sci-fi espaço"
    },
    {
        titulo : "Duna parte 2",
        ano : "Ano: 2024",
        genero : "Gênero: Sci-fi",
        descricao : "Sequência épica de Duna, que continua a jornada de Paul Atreides enquanto ele luta para controlar o destino de Arrakis e de toda a humanidade.",
        link : "https://www.imdb.com/title/tt15239678/",
        tag : "sci-fi"
    },
    {
        titulo : "O Poderoso chefão",
        ano : "Ano: 1972",
        genero : "Gênero: Drama",
        descricao : "Um clássico do cinema que conta a história da família Corleone, um poderoso clã mafioso que controla grande parte de Nova York.",
        link : "https://www.rottentomatoes.com/m/the_godfather",
        tag: "drama mafia"
    },
    {
        titulo : "Silêncio dos inocentes",
        ano: "Ano: 1991",
        genero: "Gênero: Terror/Crime",
        descricao : "O Silêncio dos Inocentes é um filme de suspense psicológico que marcou a história do cinema. Lançado em 1991, a trama gira em torno da agente do FBI Clarice Starling, uma novata em busca de um serial killer conhecido como Buffalo Bill.",
        link : "https://www.imdb.com/title/tt0102926/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_silence%2520of",
        tag : "crime terror"
    },
    {
        titulo: "2001: A Space Odyssey",
        ano: "Ano: 1968",
       genero: "Gênero: Sci-fi",
       descricao: "Uma odisseia épica que explora a evolução humana desde a pré-história até o futuro distante.",
        link: "https://www.imdb.com/title/tt0062622/",
        tag : "sci-fi espaço"
    },
    {
        titulo: "Goodfellas",
        ano: "Ano: 1990",
        genero: "Gênero: Drama/Crime",
       descricao: "A história real de Henry Hill, um jovem que se envolve com a máfia e ascende rapidamente em suas fileiras.",
        link: "https://www.imdb.com/imdb/title/tt0099685/",
        tag: "crime drama mafia"
    }


];

function pesquisar(){
    
    let seach = document.getElementById("pesquisa");

    let pesquisar= document.getElementById("pesquisar").value;

    if(pesquisar == ""){
        return
    }
    
    pesquisar = pesquisar.toLowerCase();

    let valor = "";

    let titulo = "";
    let tag= "";
    for(let filme of filmes){
        titulo = filme.titulo.toLowerCase();
        tag = filme.tag.toLowerCase();
      if(titulo.includes(pesquisar) || tag.includes(pesquisar)){
        valor += `<div class="item-resultado">
        <h2>${filme.titulo}</h2>
        <p class="descricao-meta">${filme.ano}</p>
        <p class="descricao-meta">${filme.genero}</p>
       <p class="descricao-meta">${filme.descricao} </p>
       <a href=${filme.link}" target="_blank">Saiba mais</a>
        </div> 
      }
       
    `
    }

    if(!valor){
        valor= "<p>Error 404 - not found</p>"
    }

}
    
    seach.innerHTML = valor
    
    
    
    
    
}

