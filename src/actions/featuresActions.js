
export const addFeature = (feature, car) => {
    return {type: 'ADD_FEATURE', payload: {feature, car}};
}

export const deleteFeature = (feature, car) => {
    return {type: 'REMOVE_FEATURE', payload: {feature, car}}
}