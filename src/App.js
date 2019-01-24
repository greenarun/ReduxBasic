import React, { Component } from 'react'; 
import FormSubmission from './components/FormSubmission'
import DataRetrieve from './components/DataRetrieve' 

class App extends Component {
  render() {
    return (
      <div className="App"> 
          <FormSubmission />
          <DataRetrieve />
      </div>
    );
  }
}

export default App;
