function GoalItem({ children, title }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{children}</p>
    </li>
  );
}

export default GoalItem;
