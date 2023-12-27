import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ TodoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {TodoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
