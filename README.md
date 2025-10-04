# 🎨 Etch-a-Sketch

Um quadro de desenho interativo, no estilo "Etch-a-Sketch", construído com HTML, CSS e JavaScript puro. O usuário pode desenhar em uma grade movendo o mouse, além de poder alterar a densidade da grade dinamicamente.

Este projeto foi desenvolvido como parte do currículo do [The Odin Project](https://www.theodinproject.com/) para praticar e solidificar conceitos de manipulação do DOM e gerenciamento de eventos.

**[➡️ Jogue a versão ao vivo aqui!](https://pfrigeri.github.io/Etch-a-Sketch/)**

![Print do Etch-a-Sketch](/flower_drawing.png)
---

## ✨ Funcionalidades

* **Grade Dinâmica:** A grade de desenho é gerada inteiramente com JavaScript.
* **Efeito de Desenho:** Os quadrados da grade mudam de cor permanentemente ao passar o mouse sobre eles, criando um rastro.
* **Redimensionamento da Grade:** Um botão permite ao usuário escolher um novo tamanho para a grade (de 1x1 até 100x100), que se reconstrói dinamicamente para caber perfeitamente no container.
* **Validação de Input:** O sistema alerta o usuário caso a entrada para o novo tamanho da grade seja inválida (não-numérica ou fora do intervalo permitido).
* **Reset Rápido:** Segurar a tecla **Shift** ao clicar no botão de redimensionar (`Shift + Click`) restaura a grade para o tamanho padrão, sem a necessidade de um prompt.
* **Tooltip Informativo:** Uma dica aparece ao passar o mouse sobre o botão de redimensionamento, informando o usuário sobre a funcionalidade de clique duplo ou `Shift + Click`.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3 (com Flexbox para o layout da grade)
* JavaScript (Vanilla JS)

## 🧠 O que eu aprendi

Este projeto foi um mergulho profundo e desafiador em conceitos-chave do desenvolvimento front-end:

* **Geração Dinâmica do DOM:** Pratiquei a criação e inserção de centenas de elementos (`divs`) no DOM de forma programática usando `createElement` e `appendChild` dentro de loops.
* **Layout com Flexbox:** Utilizei `display: flex` e `flex-wrap: wrap` como uma alternativa ao CSS Grid para criar um layout de grade bidimensional, aprofundando meu entendimento sobre o comportamento de flex containers.
* **O CSS Box Model:** Lidei com o desafio de espaçamento entre os elementos (`gap`) e como isso afeta o tamanho total. A aplicação de `box-sizing: border-box` foi crucial para resolver problemas de overflow.
* **Cálculos Dinâmicos de Estilo:** Aprendi a usar JavaScript para medir as dimensões de um elemento (`element.clientWidth`) e calcular dinamicamente o tamanho (em pixels) de elementos filhos para criar um layout preciso e responsivo ao container.
* **Manipulação Avançada de Eventos:** Fui além do `click` simples, implementando uma lógica para diferenciar um clique normal de um **`Shift + Click`** ao inspecionar as propriedades do objeto `event`.