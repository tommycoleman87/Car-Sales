
export const addFeature = (feature) => {
    return {type: 'ADD_FEATURE', payload: feature};
}

export const deleteFeature = (feature) => {
    return {type: 'REMOVE_FEATURE', payload: feature}
}