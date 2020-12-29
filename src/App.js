import React from "react";
import List from "./list";
import "./App.css";
import STORE from "./store";

function App() {
  const { lists, allCards } = STORE;
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists.map((list) => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map((id) => allCards[id])}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
