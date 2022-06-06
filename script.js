
/*
|                                   APIs DOM - Interfaces...   
|    Os recursos apresentados contém a interface que pertencem mais seus métodos e propriedades
|    Para informações de uso consulte a documentação...
|
|    Fonte: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#dom_interfaces
*/

// adicionar / inserir / criar
   Node.insertBefore() // insere um Node antes do nó de referência
   Element.before() // Insere um conjunto nós na lista de filhos do elemento pai, antes do elemento
   Element.after() // insere um conjunto de nós na lista de filhos do elemento pai, logo após o elemento
   Element.append() // insere um conjunto de nós após o último filho do elemento
   Element.prepend() // Insere um conjunto de nós antes do primeiro filho
   Node.appendChild() // adiciona elemento como o último filho ao nó atual
   Document.append() // insere um conjunto de Node após o último filho do documento
   Document.prepend() // insere um conjunto de Node antes do primeiro filho do documento
   Element.insertAdjacentElement() // insere um nó de elemento em uma determinada posição em relação ao elemento
   Element.insertAdjacentHTML()// insere os nós resultantes na árvore na posição fornecida
   Element.insertAdjacentText() // insere um nó de texto na posição dada em relação ao elemento
   Document.write() // escreve texto em um documento
   Document.writeln() // grava uma linha de texto em um documento
   Document.createElement() // cria um novo elemento com o nome de tag fornecido
   Document.createTextNode() // cria um nó de texto

// verifica se contém / existe  - retorna um boolean true/false
   Node.contains() // indica se um nó é ou não um descendente do nó chamador
   Node.hasChildNodes() // indica se o elemento tem ou não nós filho 
   Element.matches() // verifica se o elemento "é" o seletor
   HTMLElement.hidden // indica se o elemento está oculto ou não
   HTMLElement.inert // quando presente, faz com que o navegador "ignore" os eventos de entrada do usuário

// editar / alterar/ modificar 
 
// selecionar / obter referência
   Node.childNodes // retorna um NodeList contendo todos os elementos filhos deste nó  
   Element.children // retorna um HTMLCollection contendo apenas nós de elementos filhos deste nó
   Node.firstChild // retorna o primeiro nó filho 
   Element.firstElementChild // retorna o primeiro elemento filho
   Node.lastChild  // retorna o último nó filho 
   Element.lastElementChild // retorna o último elemento filho
   Node.nextSibling // retorna o próximo nó irmão 
   Element.nextElementSibling // retorna o próximo elemento irmão
   Node.previousSibling // retorna o nó irmão anterior
   Element.previousElementSibling // retorna o elemento irmão anterior 
   Node.parentNode  // retorna o nó pai - NodeList
   Node.parentElement  // retorna o elemento pai - HTMLCollection
   Element.childElementCount // retorna o número de elementos filho
   Document.childElementCount // retorna o número de elementos filho do documento atual
   Document.children // retorna os elementos filho do documento atual - HTMLCollection
   Document.firstElementChild // retorna o primeiro elemento filho do documento atual
   Document.lastElementChild // retorna o último elemento filho do documento atual

   Element.tagName // retorna uma string com o nome da tag 
   Node.nodeName  //  retorna uma string contendo o nome do Node *** use 'tagName'
   Node.ELEMENT_NODE // retorna o tipo(valor) de nó ex: 1
   Node.nodeType  // retorna o tipo de nó, ex: ELEMENT_NODE = 1
   Node.nodeValue // retorna o nó atual *** use 'data'

   HTMLElement.innerText // representa o conteúdo de texto renderizado de um nó, substitui o conteúdo dentro do nó
   HTMLElement.outerText // representa o conteúdo de texto renderizado de um nó, substitui todo o nó pelo texto fornecido
   Element.innerHTML // obtém ou define a marcação HTML contida dentro do elemento
   Element.outerHTML // retorna serialização HTML do elemento e seus descendentes
   Node.textContent  // obtém ou define o conteúdo textual de um elemento
   
   Document.body // retorna o elemento body do documento
   Document.title // retorna o elemento title do documento
   Document.forms // retorna os elementoS de formulário do documento
   Document.images // retorna um HTMLCollection das imagens do documento
   Document.links // retorna um HTMLCollection dos hiperlinks no documento
   Document.styleSheets // retorna folhas de estilo vinculadas ou incorporadas a um documento
   Document.readyState // retorna o status de carregamento do documento
   Document.documentElement // retorna o elemento que é um filho direto do documento
   Document.activeElement // retorna o elemento que atualmente tem foco
   Window.navigator //  retorna um referência ao objeto Navigator
   Window.document // retorna um referência ao documento
   Window.history // retorna uma referência ao objeto de histórico
   Window.location // obtém/define o local, ou URL atual, do objeto de janela * 
   Document.location // retorna o URI do documento atual
   Document.URL // retorna a localização do documento como uma string
   document.baseURI // retorna a localização do documento como uma string
   Element.closest() // retorna o elemento que é o ancestral mais próximo do elemento atual 
   Document.getSelection() // retorna texto selecionado pelo usuário
   Element.getElementsByClassName()// retorna todos os elementos da classe especificada - HTMLCollection
   Document.getElementsByTagName() // retorna uma lista de elementos com o nome de tag fornecido - HTMLCollection
   Document.getElementById() // retorna uma referência de objeto pelo id
   Document.getElementsByClassName() // retorna uma lista de elementos com o nome de classe fornecido
   Document.querySelector() // retorna o primeiro Node que corresponde ao seletor especificado
   Document.querySelectorAll() // retorna uma lista de nós que correspondem ao seletor especificado - NodeList

// manipular atributos
   Element.attributes  // retorna uma lista com todos os atributos
   Element.classList   // retorna a lista de atributos de classe
   Element.className  // retorna um DOMString que obtem e difine o valor do attr
   Element.id // retorna o id do elemento
   HTMLElement.dataset // fornece acesso de leitura/gravação a atributos de dados personalizados ( data-*)
   Element.getAttribute() //retorna o valor do atributo nomeado do nó atual e o retorna como uma string
   Element.getAttributeNames() // retorna uma matriz de nomes de atributos do elemento atual
   Element.getAttributeNode() //recupera a representação do nó do atributo nomeado do nó atual e o retorna como um Attr
   Element.hasAttributes() // retorna um booleano que indica se o elemento tem um ou mais atributos HTML presentes 
   Element.removeAttribute() // remove o atributo nomeado do nó atual
   Element.setAttribute() // define o valor de um atributo
   Element.toggleAttribute() //alterna um atributo, removendo-o se estiver presente e adicionando-o se não estiver
   Document.createAttribute() // cria um novo nó de atributo e o retorna

// aplicar estilos
   HTMLElement.style // lida com estilos 
   Window.getComputedStyle() // retorna um objeto contendo os valores de todas as propriedades CSS

// manipular eventos
   EventTarget.addEventListener() //registra um manipulador de eventos para um tipo de evento específico no elemento 
   EventTarget.dispatchEvent() // retorna um valor booleano que indica se nenhum manipulador cancelou o evento
   EventTarget.removeEventListener() // remove um ouvinte de evento do elemento

// mover
   Node.cloneNode() // clonar um Node e, opcionalmente, todo o seu conteúdo
   HTMLElement.draggable // um valor booleano que indica se o elemento pode ser arrastado

// remover
   Node.normalize() // remover 'todos' os nós de texto sob este elemento
   Node.removeChild() // remove 'um' nó filho do elemento atual
   Element.remove() // remove o elemento da lista de filhos de seu pai

// substituir
   Node.replaceChild() // substitui um filho do nó atual pelo segundo parâmetro
   Element.replaceChildren() // substitui os filhos existentes de um Node por um novo conjunto especificado
   Document.replaceChildren() // substitui os filhos existentes de um documento por um novo
   Element.replaceWith() // substitui o elemento na lista de filhos de seu pai por um conjunto de nós

// dimensões de element/document/window - altura/largura
   Element.clientHeight // retorna a altura interna do elemento
   Element.clientLeft // retorna a largura da borda esquerda do elemento
   Element.clientTop // retorna a largura da borda superior do elemento
   Element.clientWidth // retorna a largura interna do elemento
   HTMLElement.offsetParent // elemento a partir do qual todos os cálculos de deslocamento são calculados
   HTMLElement.offsetHeight // retorna a altura de um elemento, em relação ao layout
   HTMLElement.offsetWidth // retorna a largura de um elemento, em relação ao layout
   HTMLElement.offsetLeft // retorna a distância da borda esquerda
   HTMLElement.offsetTop // retorna a distância da borda superior deste elemento
   Window.innerHeight // retorna a largura interna da janela em píxeis, se renderizada, a barra de rolagem horizontal
   Window.innerWidth // retorna a largura interna da janela em píxeis, se renderizada, a barra de rolagem vertical
   Window.outerHeight // obtém a altura da parte externa da janela do navegador
   Window.outerWidth // obtém a largura da parte externa da janela do navegador
   Element.getBoundingClientRect()// retorna o tamanho de um elemento e sua posição em relação à viewport

   // scroll
   window.scrollY //  retorna o número de pixels que o documento está atualmente rolado verticalmente
   window.scrollX // retorna o número de pixels que o documento está atualmente rolado horizontalmente
   Window.pageXOffset // é o mesmo que 'window.scrollX' - *melhor compatibilidade entre os browsers
   Window.pageYOffset // é o mesmo que 'window.scrollY' - *melhor compatibilidade entre os browsers
   Element.scrollHeight // retorna a altura da visualização de rolagem de um el
   Element.scrollLeft //retorna o deslocamento de rolagem à esquerda de um el
   Element.scrollTop // retornao número de pixels na parte superior do elemento quando rolado verticalmente
   Element.scrollWidth // retorna a largura da visualização de rolagem do elemento
   Window.scrollBy() // rola o documento na janela pelo valor especificado
   Window.scrollTo() // rola para um determinado conjunto de coordenadas no documento
   Window.scroll()  // rola a janela para um local específico no documento
   Element.scrollIntoView() // rola a página até que o elemento entre na visualização

// outros
Document.close() // fecha um fluxo de documentos para gravação
Window.close() // fecha a janela
Document.open() // abre um fluxo de documentos para gravação
Window.open() // abre uma nova janela
Window.focus() // Define o foco na janela atual
Element.focus() // Define o foco no elemento atual
fetch()  // inicia o processo de buscar um recurso da rede

// armazenamento
   Window.localStorage // armazenamento local usado para armazenar dados do lado do client - dados não expiram
   Window.sessionStorage// armazenamento de sessão usado para armazenar dados - expira quando a sessão da página termina

// times
setInterval() // chama uma função ou executa um trecho de código repetidamente
setTimeout() // executa uma função ou trecho de código especificado assim que o cronômetro expirar
clearInterval()// cancela o conjunto de execução repetida usando setInterval()
clearTimeout() // Cancela o conjunto de execução atrasada usando setTimeout()
