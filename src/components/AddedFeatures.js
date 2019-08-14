import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.car.features.length ? (
        <ol type="1">
          {props.car.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} deleteFeature={props.deleteFeature} car={props.car}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
