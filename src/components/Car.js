import React from 'react';
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';


const Car = (props) => {
return (
    <div className="boxes">
    <div className="box">
      <Header car={props.car.car} />
      <AddedFeatures car={props.car} deleteFeature={props.removeFeature}/>
    </div>
    <div className="box">
      <AdditionalFeatures store={props.car.store} buyItem={props.buyItem} car={props.car}/>
      <Total car={props.car.car} additionalPrice={props.car.additionalPrice} />
    </div>
  </div>
)
}

export default Car