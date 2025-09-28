# Activity 2.2: Creating a React App to Log Your Goals for This Book

Crie um app React para listar suas metas com este livro. Cada meta será representada por um componente separado, e todos esses componentes serão agrupados em outro componente que lista todas as metas. Além disso, você pode adicionar um componente de cabeçalho extra que contém o título principal da página web.

As etapas para concluir esta atividade são as seguintes:

- Crie um novo projeto React via `npm create vite@latest <project>`.
- Dentro do novo projeto, crie uma pasta de `/components` com os seguintes componentes: `FirstGoal`, `SecondGoal`, `ThirdGoal`, `GoalList` e `Header`.
- Nos componentes de meta individuais, retorne o código JSX com o texto da meta e uma estrutura de elemento HTML adequada para conter esse conteúdo.
- No componente `GoalList`, importe e insira os componentes de objetivo individuais.
- Importe e insira os componentes `GoalList` e `Header` no componente raiz do aplicativo (substitua o código JSX existente).
- Aplique os estilos de sua escolha ou use o `index.css` do exemplo.
