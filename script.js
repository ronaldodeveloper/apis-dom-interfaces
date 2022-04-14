const log= console.log
/*
   APIs DOM - propriedades e métodos...   
     _________Funcionalidades_________
*/

// adicionar / inserir
   Node.appendChild() // adiciona elemento como o último filho ao nó atual
   Node.insertBefore() // insere um Node antes do nó de referência

// criar 
// verificar se contém / existe  - boolean true/false
   Node.contains() // indica se um nó é ou não um descendente do nó chamador
   Node.hasChildNodes() // indica se o elemento tem ou não nós filho 

// editar / alterar/ modificar 
// selecionar / obter referência
   Node.childNodes // retorna um NodeList contendo todos os filhos deste nó  
   Node.firstChild // retorna o primeiro nó filho 
   Node.lastChild  // retorna o último nó filho 
   Node.nextSibling // retorna o próximo nó irmão 
   Node.previousSibling // retorna o nó irmão anterior
   Node.nodeName  //  retorna uma string contendo o nome do Node
   Node.nodeType  // retorna o tipo de nó, ex: ELEMENT_NODE = 1...
   Node.ELEMENT_NODE // retorna o tipo de nó, ex: ELEMENT_NODE = 1...
   Node.nodeValue // retorna o nó atual
   Node.parentNode  // retorna o nó pai - NodeList
   Node.parentElement  // retorna o nó pai - HTMLCollection
   Node.textContent  // obtém ou define o conteúdo textual de um elemento
   Element.innerHTML // obtém ou define a marcação HTML contida dentro do el
   Element.outerHTML //retorna serialização HTML do elemento e seus descendentes
   Element.childElementCount // retorna o número de elementos filho
   Element.children // retorna os elementos filho deste elemento
   Element.firstElementChild // retorna o primeiro elemento filho
   Element.lastElementChild // retorna o último elemento filho
   Element.nextElementSibling //retorna o próximo elemento irmão
   Element.previousElementSibling //retorna o elemento irmão anterior 
   Element.tagName // retorna uma string com o nome da tag 

// manipular atributos
   Element.attributes  // retorna todos os atributos
   Element.classList   // retorna a lista de atributos de classe
   Element.className  // um DOMString que obtem e difine o valor do attr
   Element.id // retorna o id do elemento

// aplicar estilos
// manipular eventos
// mover
   Node.cloneNode() // Clonar um Node e, opcionalmente, todo o seu conteúdo

// remover
   Node.normalize() // remover 'todos' os nós de texto sob este elemento
   Node.removeChild() // remove 'um' nó filho do elemento atual

// substituir
   Node.replaceChild() // substitui um filho do nó atual pelo segundo parâmetro

// dimensões de element/document/window - altura/largura
   Element.clientHeight //retorna a altura interna do elemento
   Element.clientLeft // retorna a largura da borda esquerda do elemento
   Element.clientTop // retorna a largura da borda superior do elemento
   Element.clientWidth // retorna a largura interna do elemento
   Element.scrollHeight //retorna a altura da visualização de rolagem de um el
   Element.scrollLeft //retorna o deslocamento de rolagem à esquerda de um el
   Element.scrollTop //o número de pixels na parte superior do elemento quando rolado verticalmente
   Element.scrollWidth //a largura da visualização de rolagem do elemento




