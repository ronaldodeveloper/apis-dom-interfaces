const log= console.log

/*
|              INTERFACES DE ELEMENTOS HTML 
|   ... Essas interfaces representam elementos HTML específicos ...
|   > Font: https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API
*/

// HTMLAnchorElement - TAG <a>
HTMLAnchorElement.href     // contém uma URL válida de um recurso vinculado
HTMLAnchorElement.hash     //representando o identificador do fragmento (' # ')
HTMLAnchorElement.host     // representando o nome do host e a porta 
HTMLAnchorElement.hostname //retorna o nome do host na URL referenciada
HTMLAnchorElement.port     //representando o componente de porta, se houver
HTMLAnchorElement.search   //representando o elemento de pesquisa, incluindo (' ?')
HTMLAnchorElement.username //nome de usuário especificado antes do nome de domínio
HTMLAnchorElement.protocol //retorna o componente de protocolo um

// HTMLFormElementinterface - TAG <form>
HTMLFormElement.elements //retorna todos os controles pertencentes a este formulário
HTMLFormElement.method   //indicando o método HTTP usado para enviar o formulário
HTMLFormElement.autocomplete //indica preenchimento automaticamente dos controles
HTMLFormElement.action //o URI de um programa que processa as informações enviadas pelo formulário


// HTMLImageElement - TAG <img>
HTMLImageElement.alt // indicando o conteúdo alternativo a ser exibido se a imagem não carregar
HTMLImageElement.currentSrc // indicando o URL completo da imagem atualmente visível
HTMLImageElement.src //contém o URL completo da imagem
HTMLImageElement.height //indica a altura renderizada da imagem
HTMLImageElement.width //indica a largura renderizada da imagem
HTMLImageElement.sizes //especifica uma lista de tamanhos condicionais separados por vírgulas


// HTMLInputElement - TAG <input>
HTMLInputElement.labels //retorna um NodeList associados ao elemento <input>
HTMLInputElement.name   //um nome que identifica o elemento ao enviar o formulário
HTMLInputElement.step   //funciona com 'min' e 'max' para limitar os incrementos numéricos/datas
HTMLInputElement.type   //indicando o tipo de controle a ser exibido
HTMLInputElement.value  //retorna / define o valor atual do controle
HTMLInputElement.autofocus //especifica que um controle de formulário deve ter foco
HTMLInputElement.disabled  //indicando que o controle não está disponível para interação
HTMLInputElement.required //indicando que o usuário deve preencher um valor antes de enviar um formulário - true/false
HTMLInputElement.blur()  //remove o foco do teclado do elemento atual
HTMLInputElement.focus() //define o foco no elemento especificado
HTMLInputElement.click() //simula um clique no elemento de entrada
HTMLInputElement.select() //seleciona todo o texto no elemento de entrada e o foca
 //### TYPE checkbox ou radio 
 HTMLInputElement.checked  //retorna/define o estado atual do elemento
 //### TYPE files
 HTMLInputElement.files //retorna uma lista de objetos 'Files' que representam os arquivos selecionados para upload
 //###  elementos visíveis contendo texto ou números 
 HTMLInputElement.autocomplete // indicando se o valor do controle pode ser preenchido automaticamente
 HTMLInputElement.max //o valor máximo (numérico ou data-hora) para este item
 HTMLInputElement.min //o valor mínimo (numérico ou data-hora) para este item
 HTMLInputElement.pattern //expressão regular com a qual o valor do controle é verificado
 HTMLInputElement.placeholder //fornece uma dica para o usuário do que pode ser inserido no controle
 HTMLInputElement.readOnly  //indica que o usuário não pode modificar o valor do controle


 // HTMLMediaElement -interface que adiciona propriedades e métodos comuns a áudio e vídeo
 HTMLMediaElement.autoplay  //indicando se a reprodução deve começar automaticamente
 HTMLMediaElement.controls  //indicando se os itens da interface do usuário para controlar o recurso devem ser exibidos
 HTMLMediaElement.currentTime //indica o tempo de reprodução atual em segundos
 HTMLMediaElement.duration //indica a duração total da mídia em segundos
 HTMLMediaElement.loop     //indica se o elemento de mídia deve recomeçar quando chegar ao fim
 HTMLMediaElement.muted    //determina se o áudio é silenciado -true/false
 HTMLMediaElement.paused   //indica se o elemento de mídia está pausado
 HTMLMediaElement.src      //contém o URL de um recurso de mídia a ser usado
 HTMLMediaElement.volume   //indicando o volume do áudio
 HTMLMediaElement.pause()  //pausa a reprodução de mídia
 HTMLMediaElement.play()   //inicia a reprodução da mídia


 // HTMLVideoElement
 HTMLVideoElement.poster // especifica uma imagem a ser exibida enquanto não há dados de vídeo disponíveis


// HTMLOptionElement - TAG <option>
HTMLOptionElement.selected // indica se a opção está selecionada no momento


// HTMLSelectElement - TAG <select>
HTMLSelectElement.options //retorna o conjunto de elementos <option> contidos por este elemento
HTMLSelectElement.required //indica se o usuário deve selecionar um valor antes de enviar o formulário


//HTMLTableElement - TAG <table>
HTMLTableElement.rows //retorna um HTMLCollection  de todas as linhas da tabela - <tr>
HTMLTableRowElement.cells // retorna um HTMLCollection contendo as células na linha
HTMLTableRowElement.rowIndex //retorna a posição lógica da linha dentro da tabela inteira
HTMLTableElement.insertRow() //insere uma nova linha - <tr>
HTMLTableRowElement.deleteCell(index) //remove a célula correspondente a index
HTMLTableRowElement.insertCell(index) //insere uma nova célula da linha
