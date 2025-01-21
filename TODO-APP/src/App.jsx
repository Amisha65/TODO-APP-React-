import Appname from "./Component/AppName";
import AppTodo from "./Component/AddTodo";
import Items from "./Component/Items";
import WelcomeMassage from "./Component/WelcomeMessage";
import "./App.css";
import TodoItemsContexProvider from "./Store/todo-item-store";
import styles from "./App.module.css";

function App() {
  return (
    <TodoItemsContexProvider>
      <center className={`border border-success ${styles.todoContainer}`}>
        <Appname />

        <AppTodo />

        <WelcomeMassage />

        <Items></Items>
      </center>
    </TodoItemsContexProvider>
  );
}

export default App;
