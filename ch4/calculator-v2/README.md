# Activity 4.2: Enhancing the Calculator

Nesta atividade, você se baseará na **Atividade 4.1** para tornar a calculadora construída ali um pouco mais complexa. O objetivo é reduzir o número de componentes e construir um único componente no qual os usuários possam selecionar a operação matemática por meio de um menu dropdown.

Além disso, o resultado deve ser gerado em um componente diferente — ou seja, não no componente onde a entrada do usuário é coletada. Os passos são os seguintes:

- Remova três dos quatro componentes da atividade anterior e use um único componente para todas as operações matemáticas.
- Adicione um dropdown (elemento `<select>`) ao componente restante (entre as duas entradas) e adicione as quatro operações matemáticas como opções (elementos `<option>`).
- Use o estado para coletar os números inseridos pelo usuário e a operação matemática escolhida por meio do menu suspenso (você decide se prefere um único objeto de estado ou vários valores de estado).
- Gere o resultado em outro componente. (Dica: escolha um bom lugar para registrar e administrar o estado).
