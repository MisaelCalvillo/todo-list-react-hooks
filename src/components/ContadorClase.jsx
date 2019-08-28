import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0
    };
  }

  render() {
    return (
      <div>
        <p>Hiciste click {this.state.cuenta} veces</p>
        <button onClick={() => this.setState({ cuenta: this.state.cuenta + 1 })}>
          PRESIONAME
        </button>
      </div>
    );
  }
}

export default Contador;