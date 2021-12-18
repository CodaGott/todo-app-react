import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TodoItem from '../TodoItem/TodoItem';

const Todoapp = () => {

    const todoItems = [{
        "id" : 1,
        "itemName" : "Get money",
        isDone : false
    }, 
    {
        "id" : 2,
        "itemName" : "Get more money",
        isDone : false
    }, {
        "id" : 3,
        "itemName" : "Work",
        isDone : true
    }]
    return (


        <div>
    <Header/>
    <div style={{marginBottom: '3rem'}}>
      <h1>Todo List</h1>
      {
        todoItems
        .map((todoItem) =>{
            return <TodoItem todoItemData={todoItem} key={todoItem.id}/> ;
        })
      }
      <Footer/>
    </div>
        </div>
    );
};

export default Todoapp;