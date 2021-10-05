import './App.css';

const tasks = ['Fazer o pitch', 'Ver videos que o Claudião mandou', 'Ler 20 páginas']
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  return (
    tasks.map((task) => Task(task))
  );
}

export default App;
