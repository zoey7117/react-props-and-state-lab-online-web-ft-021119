import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = ({ target: { value } }) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }

  onFindPetsClick = () => {
    let URL = ''
    if(this.state.filters.type === 'all'){
      URL= '/api/pets'
    } else if(this.state.filters.type === 'cat'){
      URL= '/api/pets?type=cat'
    } else if(this.state.filters.type === 'dog'){
      URL= `/api/pets?type=dog`
    } else if(this.state.filters.type === 'micropig'){
      URL= `/api/pets?type=micropig`
    }

    fetch(`${URL}`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
    }


   onAdoptPet = (petId) => {
      let petsList = this.state.pets
      let adoptPet = petsList.find(pet => pet.id === petId)
        adoptPet.isAdopted = true
        this.setState({
         petsList
        })
   }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
