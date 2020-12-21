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
    let listAppliReverse = []

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
        <button className="SortingButton" onClick={() => 
            console.log(`Coucou !`)}>
            Trier
          </button>
          <ul>{listAppli}</ul>
        </main>
      </div>
    );
  }
}



export default App;

