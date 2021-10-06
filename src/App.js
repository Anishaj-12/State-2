import './App.css';
import React from 'react';
import my from './cat.jpg'
import imt from './im.JPG'

class App extends React.Component {
 
    
    state = {

    Person:{
       
       fullName:"Mbarek Anis",
       bio:"Formation Developpement Web",
       imageUrl:"https://th.bing.com/th/id/R.f05fa2b56b57db1c12488370ebedc44d?rik=yCurcZ6BcUh3SA&pid=ImgRaw&r=0",
       /*images: imt,
       imk: my,*/
       profession:"Développeur Web"
    },
    counter : 0,
    show: true
   };



   handleShowPerson =()=> {
     this.setState({
       show: !this.state.show
     });
   }





  componentDidMount() {
    setInterval(() => {
      this.setState({counter:this.state.counter+1})
    }, 1000)
    
  }
 










 render() {

  return (
    <div className="App">
    <h4>  counter  : {this.state.counter} </h4>
      {this.state.show && (
        <>
      <h1>{this.state.Person.fullName}</h1> 
      
      <h4> {this.state.Person.bio} </h4>
      <img src={this.state.Person.imageUrl} height="400" />
      <img src={this.state.Person.images} height={400} />
      <img src={this.state.Person.imk} height={400} />

     <h4> {this.state.Person.profession} </h4>
   
      </>
      )}

      
    
      

    
     
<button onClick={this.handleShowPerson}>Show Me</button> 
    </div>
  );
}
}
export default App;
