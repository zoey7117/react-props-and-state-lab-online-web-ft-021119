import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
  }




  render() {
    const allPets = this.props.pets.map((pet) =>
    <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
    return <div className="ui cards">{allPets}</div>
  }
}

export default PetBrowser
