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
      <li>{appli.id} ===> {appli.owner}</li>);
    } 

    console.log(applications)

    


    return (

      <div className="App">
        <header className="App-header">
          <p>Ici le titre de mon appli trop cool qui va charger et visualiser un fichier json</p>
        </header>
        <main>
          <p>voici ma liste : </p> 
          <ul>{listAppli}</ul>
          <button onClick={() => console.log(`Bonjour !`)}>
            Trier
          </button>
        </main>
      </div>
    );
  }
}



export default App;

