# Pokédex

Uma Pokédex desenvolvida em React utilizando a [PokéAPI](https://pokeapi.co/), inicialmente criada como um projeto simples com o objetivo de praticar desenvolvimento Front-end e configurar um pipeline de CI/CD para publicação automática no GitHub Pages.

Com o tempo, o projeto evoluiu de uma simples lista de Pokémon para uma Pokédex mais completa, buscando reunir informações úteis para jogadores iniciantes e também detalhes que podem ser interessantes para jogadores veteranos.

## Objetivo do projeto

A ideia inicial era criar uma aplicação simples contendo os Pokémon e suas informações básicas, além de utilizar um pipeline para que cada alteração enviada para a branch `main` atualizasse automaticamente a aplicação publicada no GitHub Pages.

Depois, o projeto passou a ter um objetivo maior: criar uma Pokédex que não apenas exibisse informações, mas que também pudesse funcionar como um **guia para jogadores de Pokémon**.

A proposta é reunir em um único lugar informações que normalmente precisam ser pesquisadas em diferentes fontes, facilitando a consulta durante a jornada do jogador.

O projeto continua em desenvolvimento e novas funcionalidades e melhorias podem ser adicionadas conforme novas ideias e sugestões forem identificadas.

## Funcionalidades

### Busca e navegação

- Filtro de Pokémon por nome.
- Filtro de Pokémon por geração.
- Lista de Pokémon com imagem e informações.
- Navegação entre Pokémon anteriores e próximos.

### Informações do Pokémon

Cada Pokémon possui uma página própria contendo informações como:

- Nome.
- Número na Pokédex.
- Imagem.
- Peso.
- Altura.
- Tipagem.
- Habilidades.
- Descrição.
- Status base.

### Tipagem

A tipagem do Pokémon apresenta informações relacionadas às interações entre os tipos:

- Fraquezas.
- Resistências.
- Vantagens.
- Tipos relacionados ao Pokémon.

As informações de tipagem podem ser consultadas de forma mais detalhada através da interface, evitando sobrecarregar a página principal com informações.

### Status

São apresentados os principais atributos base do Pokémon, permitindo visualizar sua distribuição de status, como:

- HP.
- Ataque.
- Defesa.
- Ataque Especial.
- Defesa Especial.
- Velocidade.

### Formas alternativas

A Pokédex também permite consultar diferentes formas de um Pokémon, incluindo:

- Formas alternativas.
- Mega Evoluções.
- Gigantamax.
- Formas regionais.

### Árvore evolutiva

Cada Pokémon pode possuir sua própria árvore evolutiva, permitindo visualizar:

- Pokémon anteriores na cadeia evolutiva.
- Próximas evoluções.
- Evoluções ramificadas.
- Métodos necessários para evolução.

Os métodos de evolução podem envolver diferentes condições, como:

- Nível.
- Amizade.
- Troca.
- Itens.
- Outras condições disponibilizadas pela PokéAPI.

Isso permite visualizar não apenas **qual Pokémon evolui**, mas também **como realizar a evolução**.

### Golpes

A Pokédex possui uma lista de golpes que o Pokémon pode aprender por nível.

Para cada golpe são apresentadas informações como:

- Nível em que o golpe é aprendido.
- Nome.
- Tipo.
- Poder.
- Precisão.
- PP.

Isso permite consultar rapidamente quais golpes podem ser aprendidos durante a evolução do Pokémon.

### Locais de encontro

Também é possível consultar os locais onde cada Pokémon pode ser encontrado nos diferentes jogos da franquia.

As informações incluem:

- Jogo/versão.
- Local de encontro.
- Formas de encontro disponibilizadas pela API.

O objetivo é facilitar a consulta para jogadores que estejam tentando descobrir **onde encontrar determinado Pokémon em um jogo específico**.

## Tecnologias utilizadas

- React
- TypeScript
- React Router
- HTML
- CSS
- PokéAPI
- LibreTranslate
- GitHub Actions
- GitHub Pages

## APIs e recursos externos

### PokéAPI

A maior parte das informações utilizadas pela aplicação é obtida através da PokéAPI.

[https://pokeapi.co/api/v2](https://pokeapi.co/api/v2)

A API fornece informações sobre Pokémon, espécies, tipos, evoluções, golpes, encontros, formas, entre diversos outros dados da franquia.

### Imagens dos Pokémon

As imagens utilizadas na Pokédex são obtidas através dos assets oficiais disponibilizados pela pokeApi.

Exemplo:

`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`

O número `001` corresponde ao número do Pokémon na Pokédex.

### LibreTranslate

O LibreTranslate é utilizado para auxiliar na tradução de determinadas descrições da PokéAPI para português.

As traduções são armazenadas localmente para evitar traduções desnecessárias em consultas posteriores.

## Como executar o projeto

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/matheusspaiva/pokedex.git

cd pokedex
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm start
```

A aplicação será executada localmente em:

`http://localhost:3000`

## Build

Para gerar a versão de produção:

```bash
npm run build
```

## Deploy

O projeto utiliza **GitHub Actions** para automatizar o processo de build e publicação no GitHub Pages.

O objetivo do pipeline é permitir que alterações enviadas para a branch `main` sejam automaticamente processadas e disponibilizadas na aplicação publicada.

Dessa forma, o fluxo principal de atualização é:

```text
Alteração no código
       ↓
Pull Request / Merge
       ↓
      main
       ↓
GitHub Actions
       ↓
     Build
       ↓
GitHub Pages
       ↓
Aplicação atualizada
```

## Projeto em desenvolvimento

A Pokédex continua em desenvolvimento.

A ideia é continuar adicionando funcionalidades que possam tornar a aplicação mais útil como uma ferramenta de consulta para jogadores, mantendo uma interface simples de navegar e evitando sobrecarregar a tela principal com informações desnecessárias.

Sugestões de novas funcionalidades e melhorias são bem-vindas e podem contribuir para a evolução do projeto.
