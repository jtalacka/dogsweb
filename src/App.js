import React from 'react';
import logo from './logo.svg';
import Fact from './components/Fact'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {fact:[]}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    axios.get('https://factdogs.herokuapp.com/get').then(response => this.setState({fact:response.data}))
}


render() {
  return(
<div>
    <div className="header">
    <h1 className=" titleName">Interesting Dog facts</h1>
<div className="header_pictures form-inline ml-auto">
    <a className=" form-inline" href="https://www.linkedin.com/in/julius-talacka/"> <img src="linkedin.png" alt="" className="linkedin"/></a>
    <a className=" form-inline" href=""><img alt="" src="github.png" className="github"/></a>
    </div>

</div>
<div className="Card">

<Fact fact={this.state.fact}/>

<div className="d-flex justify-content-center mb-20">
      <button className="btn btn-default btn-lg btn-block" onClick={this.handleClick}>Get a random fact about dogs</button>
</div>


<div className="d-flex justify-content-center description ">
  <div className="card">
    <h5 className="card-title">Welcome</h5>
    <p className="card-text">Hello and welcome to this simple page. Here by clicking a simple button a random fact about dogs will be shown to you. I hope, that even more animal lovers would check what they don't know about these mans best friends</p>
    </div>
</div>



</div>


<div className="backgroundPicture">
  <img className="backgroundPicturePicture"  alt="" src="background.png"></img>
</div>
<footer className="footer">
  <div className="footer-text d-flex justify-content-center"><h2>
    Made by Julius Talačka
  </h2>
  </div>

</footer>

    </div>
  )
}

}

export default App
