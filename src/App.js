import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signIn/SignIn';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import Register from './components/register/Register';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 170,
      density: {
        enabled: true,
        value_area: 800
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}

const app = new Clarifai.App({
 apiKey: 'c3767252de524308a51a9d046db4f2b1'
});

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log(box);
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({
        isSignedIn: false
      })
    } else if (route === 'home') {
      this.setState({
        isSignedIn: true
      })
    }
    this.setState({
      route: route
    })
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({
      imageURL: this.state.input
    })
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      if(response){
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
      .then(response => response.json())
      .then(count => {
        console.log(count);
        this.setState(Object.assign(this.state.user, { entries: count }))
      })
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log('error',err))
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        { this.state.route === 'home'
          ? <div>
              <Logo />
              <Rank name={this.state.user.name} rank={this.state.user.entries} />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={this.state.box} imageURL={this.state.imageURL} />
            </div>
          : ( this.state.route === 'signin' 
            ?  <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :   <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )  
        }
      </div>
    );
  }
}

export default App;
