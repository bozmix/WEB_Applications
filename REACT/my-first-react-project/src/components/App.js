import { Fragment, Component } from 'react';
import { Header } from './Header/Header.jsx';
import { BlogList } from './BlogList/BlogList.jsx';
import Star from './Star/Star.jsx';
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
    this.onCountClick = this.onCountClick.bind(this);
  }

  //onLogIn = () => this.setState({isLoggedIn: true});
  onLogIn(){
    this.setState({isLoggedIn: true})
  }

  onCountClick(){
    this.setState({count: this.state.count + 1})
  }

  onLogOut = () => this.setState({isLoggedIn: false});

render() {
  //console.log(this.state);
  const {user, isLoggedIn, count} = this.state;
  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} onLogIn={this.onLogIn} onLogOut={this.onLogOut} name={user} />
      <Star/>
      <BlogList count={count} onClick={this.onCountClick}/>
    </Fragment>
  );
}
}

export default App;
