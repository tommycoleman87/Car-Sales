import React from 'react';
import Car from './components/Car';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import {addFeature} from './actions/featuresActions';
import {deleteFeature} from './actions/featuresActions';
const App = (props) => {
  console.log(props)
  const removeFeature = (item, car) => {
    // dispatch an action here to remove an item
    props.deleteFeature(item, car)
  };

  const buyItem = (item, car) => {
    // dipsatch an action here to add an item
    props.addFeature(item, car)
  };


  return (
    <div>
    {props.cars.map(car => {
      return <Link to={`/${car.car.url}`}><button>{car.car.name}</button></Link>
    })}
    {props.cars.map(car => {
      return <Route path={`/${car.car.url}`} render={(props) => <Car car={car} removeFeature={removeFeature} buyItem={buyItem}/>} />
    })}
    <Route path='/' exact />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.cars
  }
}

export default connect(
  mapStateToProps,
  {addFeature, deleteFeature }
)(App);




