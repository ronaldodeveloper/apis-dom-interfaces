const log= console.log
/*
   APIs DOM - propriedades e métodos...   
     _________Funcionalidades_________
*/

// adicionar / inserir
   Node.appendChild() // adiciona elemento como o último filho ao nó atual
   Node.insertBefore() // Insere um Node antes do nó de referência

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
   Node.textContent  // retorna ou define o conteúdo textual de um elemento
   
// aplicar estilos
// manipular eventos
// mover
   Node.cloneNode() // Clonar um Node e, opcionalmente, todo o seu conteúdo

// remover
   Node.normalize() // remover 'todos' os nós de texto sob este elemento
   Node.removeChild() // Remove 'um' nó filho do elemento atual

// substituir
   Node.replaceChild() // Substitui um filho do nó atual pelo segundo parâmetro


