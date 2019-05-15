import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { addCharacter } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    console.log('character list view says:' this.props )
    this.props.addCharacter('Jtonna');
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return {console.log('character list view fetching is working')}
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    assCharacter
  }
)(CharacterListView);
