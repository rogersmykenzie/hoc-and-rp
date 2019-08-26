import React from 'react';
import logo from './logo.svg';
import MyName from './components/MyName';
import Counter from './render-prop-components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <MyName name="Chester">
        <h1>Hello</h1>
      </MyName> */}
      <Counter render={({counter, increase, decrease}) => {
        return (
          <>
            <h1>{counter}</h1>
            <button onClick={() => increase(1)}>Increment</button>
          </>
        )
      }} />
      <Counter render={(api) => {
        return <h3 onClick={() => api.increase(1)}>{api.counter}</h3>
      }}/>
    </div>
  );
}

export default App;
