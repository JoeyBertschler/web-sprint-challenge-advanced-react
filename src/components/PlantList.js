/*----
  Display a list of the plants from the server. 
  This should be done in the class component `PlantList`. 
  
* [ ] In the `PlantList` class component, fetch data from the server you now have running - 
      the data can be fetched from `http://localhost:3333/plants.`
* [ ] Set the data to a state property called `this.state.plants.`
* [ ] The render function is already built and styled. Once the data is on the state, 
you will see the list of plants, and you will have the functionality to add a plant to the cart.
------*/

import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor(props){
    super();
    this.state = {
      plants: [],
      searchText: '',
      fallBack: 'Error 404, data not found.',
      egg: "Congratz, you've found an easteregg!",
      NoteToSelf: `The state object is where you 
      store property values that belong to the component.`
    }
    this.props = props
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  componentDidMount = () => {
     axios.get('http://localhost:3333/plants')
          .then(res => {
            console.log(res)
            this.setState({ // logic: oldData.append(state.plants: res.data)
              ...this.state, plants: res.data //corr syntax
              // WARNING, the following version causes BREAK
              //...this.state, plants: res.data.plantsData
            });
            console.log(this)
            console.log(res.data)
          }) //no ; here
          .catch(err => {
            console.log('Error: ', err)
          })
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/

  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id} data-testid="plant-card">
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
