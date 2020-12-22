import { Component } from 'react';
import './App.css';



class App extends Component {

  state = {
      data: []
    }

  componentDidMount(){
    fetch('applications.json')
      .then((response) =>{
        return response.json()
      })

      .then((result) =>{
        this.setState({data: result})
      })
    }

  render() {

    let applications = []
    let listAppli = []

    if (this.state.data.length === 0) {
      applications = 'loading';
    }
    else{
      applications= this.state.data;
      listAppli = applications.map(appli => 
      <div className="ListAppli">
        <div className="AppliId">{appli.id}</div>
        <div className="AppliOwner">{appli.owner}</div>
      </div>);
    } 

    console.log(applications)

    return (

      <div className="App">
        <header className="App-header">
          <p>Voici la liste des applications de Hollusion</p>
        </header>
        <main>
          <div className="Sorting-bar">
            <button className="Sorting-button" onClick={() => 
            console.log(applications.reverse())}>
            Trier ⯆
            </button>
            <input className="Sorting-search" type="text" name="search" />
            <button className="Sorting-search-button" onClick={() => 
            console.log('recherche')}>
            recherche
            </button>
          </div>
          <div>{listAppli}</div>
        </main>
      </div>
    );
  }
}

function reverseList(){

}


export default App;

