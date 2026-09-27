# 🐶 Salve Doguinho

Site institucional para uma ONG fictícia de proteção e bem-estar animal, desenvolvido como projeto acadêmico. A aplicação funciona como uma SPA (Single Page Application) simples, utilizando `<template>` do HTML e JavaScript puro para trocar o conteúdo da página sem recarregar o navegador.

🔗 [Acesse o site pelo GitHub Pages](https://rafaelmnt.github.io/salve-doguinho)

## 📋 Sobre o projeto

O **Salve Doguinho** apresenta a ONG, seus projetos de doação e campanhas de voluntariado, a lista de voluntários cadastrados por área de atuação e um formulário de cadastro para novos voluntários.

## ✨ Funcionalidades

- **Início**: apresentação da ONG, com informações sobre quem somos e nossa missão.
- **Projetos**: listas de itens para doação e campanhas de voluntariado, com destaque (badge) para itens urgentes.
- **Voluntários**: listagem dos voluntários organizados por área de atuação (Banho Pet, Resgate Animal, Adestradores Avante e Sem preferência).
- **Cadastro**: formulário de inscrição de novos voluntários, com:
  - Validação de campos obrigatórios e feedback visual de erro;
  - Alerta de campos pendentes;
  - Armazenamento dos dados no `localStorage` do navegador;
  - Notificação (toast) de confirmação após o envio;
  - Voluntários recém-cadastrados aparecem automaticamente na página de Voluntários.
- **Navegação responsiva**: menu hambúrguer em telas pequenas e menu horizontal a partir de telas maiores, com layout adaptado em diferentes breakpoints (400px, 576px, 768px, 992px e 1200px).

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura da página com uso de `<template>` para as diferentes seções/rotas.
- **CSS3** — estilização com variáveis (custom properties), Grid e Flexbox, fontes customizadas (`@font-face`) e media queries para responsividade.
- **JavaScript (ES Modules)** — manipulação do DOM, roteamento simples entre páginas, validação de formulário e persistência de dados com `localStorage`.

## 📁 Estrutura de pastas

```
salve-doguinho/
├── index.html
└── src
    ├── assets
    │   ├── fonts
    │   │   ├── Fredoka-Bold.ttf
    │   │   ├── Fredoka-Light.ttf
    │   │   ├── Fredoka-Regular.ttf
    │   │   └── Lora-Regular.woff
    │   └── img
    │       ├── favicon.ico 
    │       └── logo.png
    ├── css
    │   └── style.css  
    ├── docs
    │   └── README.md    
    └── js
        ├── formulario.js
        ├── projetos.js
        ├── script.js
        └── voluntarios.js
```

## ▶️ Como executar

### Online

O site está publicado via GitHub Pages e pode ser acessado diretamente em:

🔗 **https://rafaelmnt.github.io/salve-doguinho**

### Localmente

Como o projeto usa módulos JavaScript (`type="module"`), ele precisa ser servido por um servidor local (não funciona abrindo o `index.html` diretamente via `file://`).

1. Clone ou baixe este repositório.
2. Abra a pasta do projeto em um servidor local, por exemplo:
   - Usando a extensão **Live Server** do VS Code; ou
   - Usando Python: `python -m http.server`
3. Acesse o endereço indicado (ex: `http://localhost:5500` ou `http://localhost:8000`) no navegador.

## 🚀 Possíveis melhorias futuras

- Persistir os dados de cadastro em um back-end/banco de dados em vez de `localStorage`.
- Adicionar máscara de input para CPF, telefone e CEP.
- Criar página de detalhes/edição para cada voluntário cadastrado.

## 👤 Autor

**Rafael Monteiro**

Projeto acadêmico desenvolvido para a **Cruzeiro do Sul Virtual**.