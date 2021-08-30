import { Fragment, Component, useState, useEffect } from 'react';
import { Header } from './Header/Header.jsx';
import { BlogList } from './BlogList/BlogList.jsx';
import Star from './Star/Star.jsx';
import './App.css';
import { AboutPage } from './AboutPage/AboutPage';
import { HomePage } from './HomePage/HomePage';
import {Switch, Route, Redirect} from 'react-router-dom';
import { getSingleBlog } from '../services/blogService.js';

export const notFoundPage = () => (<div>Page not found :(</div>)

const SingleBlogPage = (props) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    getSingleBlog(props.match.params.id)
      .then(blog => {
        setBlog(blog);
      })
  }, [])
  return (
      <div className='blogText'>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
      </div>
  )
}

export class App extends Component {
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
  const {user, isLoggedIn} = this.state;
  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} onLogIn={this.onLogIn} onLogOut={this.onLogOut} name={user} />
      <Star/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/blog' component={BlogList} />
        <Route path='/not-found' component={notFoundPage} />
        <Route path='/single-blog/:id' component={SingleBlogPage}/>
        <Redirect from='/' to='/not-found' />
      </Switch>
    </Fragment>
  );
}
}

