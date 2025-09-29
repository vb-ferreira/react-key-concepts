import GoalItem from './GoalItem';

function GoalList() {
  return (
    <main>
      <ul>
        <GoalItem title="Entender o React">
          Compreender como a biblioteca funciona por baixo dos panos.
        </GoalItem>
        <GoalItem title="Praticar">
          Resolver todos os exercícios propostos.
        </GoalItem>
        <GoalItem title="Aprendizado contínuo">
          Procurar outras fontes e recursos.
        </GoalItem>
      </ul>
    </main>
  );
}

export default GoalList;
