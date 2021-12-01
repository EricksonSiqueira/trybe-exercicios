import React, { Component } from 'react';

const FamilyContext = React.createContext();

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({ inheritance: prevState.inheritance - 1000 }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance
    };

    return (
      <FamilyContext.Provider value={contextValue}>
        Sou o bisavô
        <Grandmother />
      </FamilyContext.Provider>
    );
  }
}

function Grandmother(props) {
  return (
    <div>
      Sou a avó
      <Father />
    </div>
  );
}

function Father(props) {
  return (
    <div>
      Sou o pai
      <Daughter />
    </div>
  );
}

function Daughter() {
  return (
    <FamilyContext.Consumer>
      {({ inheritance, spendInheritance }) => (
        <div>
          <p>Sou a filha</p>
          <span>
            { `Tenho uma herança de R$${inheritance} que recebi do meu bisavô`}
          </span>
          <button type="button" onClick={spendInheritance}>
            Gastar Herança!
          </button>
        </div>
      )}
    </FamilyContext.Consumer>
  );
}

export default GreatGrandfather;