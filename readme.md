# Whiteboard

Esta é uma aplicação em React que permite ao usuário clicar em qualquer lugar da página para criar pequenos círculos. A cada clique, um novo círculo é renderizado na posição clicada. Além disso, a aplicação possui as funcionalidades de desfazer (undo), refazer (redo), limpar o quadro e alterar a cor dos circulos criados.

## Funcionalidades

- Clicar em qualquer lugar da página para criar um novo círculo.
- Manter os círculos já criados enquanto novos são adicionados.
- Desfazer (undo): Desfaz a ação mais recente de criação de círculo.
- Refazer (redo): Refaz a ação previamente desfeita de criação de círculo.
- Limpar quadro: Limpa o quadro e retorna para o state inicial
- Salva suas últimas alterações no localstorage do navegador

## Como Subir a Aplicação

Siga as instruções abaixo para subir a aplicação em seu ambiente de desenvolvimento:

### Pré-requisitos

- Node.js (https://nodejs.org) instalado em sua máquina.
- Gerenciador de pacotes npm (instalado automaticamente com o Node.js).

### Passos

1. Clone este repositório para o seu ambiente local.

```shell
git clone https://github.com/thg021/whiteboard.git
```

2. Navegue até o diretório do projeto.

```shell
cd whiteboard
```

3. Instale as dependências do projeto.

```shell
npm install
```

4. Inicie o servidor de desenvolvimento.

```shell
npm run dev
```

5. Acesse a aplicação no seu navegador.

Geralmente o vite usa a porta `5173`. Verifique o endereço assim que aplicação rodar

```shell
http://localhost:5173
```

Agora você pode interagir com a aplicação, clicando na página para criar círculos.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- TypeScript: Superset do JavaScript que adiciona tipagem estática ao código.
- Vite: Build tool rápida e leve para projetos front-end.
- HTML e CSS: Linguagens de marcação e estilo para construção da interface.
- Stitches: Biblioteca CSS-in-JS que permite escrever estilos dinâmicos e reutilizáveis
