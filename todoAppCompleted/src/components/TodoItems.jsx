import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";


const TodoItems = ({ TodoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {TodoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick = {onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
