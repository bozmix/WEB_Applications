import { Fragment, Component } from 'react';
import { Header } from './Header/Header.jsx';
import { BlogList } from './BlogList/BlogList.jsx';
import './App.css';

class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      user: 'Bozo',
      isLoggedIn: false,
      count: 0
    }
    this.onLogIn = this.onLogIn.bind(this);
  }

  //onLogIn = () => this.setState({isLoggedIn: true});
  onLogIn(){
    this.setState({isLoggedIn: true})
  }

  onLogOut = () => this.setState({isLoggedIn: false});

render() {
  console.log(this.state);
  return (
    <Fragment>
      <Header isLoggedIn={this.state.isLoggedIn} onLogIn={this.onLogIn} />
      <BlogList />
    </Fragment>
  );
}
}

export default App;
