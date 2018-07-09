import React, { Component } from 'react';
import logo from './share.png';
/*import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ConnectIn</h1>
        </header>
        <p className="App-intro">
          <code><h3> To get started, Please Login </h3></code>
        </p>
      </div>
    );
  }
}

export default App;
*/

//import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css';
import Loginscreen from './Loginscreen'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
					loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
		 <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ConnectIn</h1>
        </header>
        <p className="App-intro">
          <code><h3> To get started, Please Login </h3></code>
        </p>
		
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
/*const style = {
  margin: 15,
};*/
export default App;