const ADD_FEATURE = 'ADD_FEATURE';
const REMOVE_FEATURE = 'REMOVE_FEATURE';
const initialState = {
        cars: [{
        id: 1,
        additionalPrice: 0,
        car: {
          price: 26395,
          url: 'mustang',
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        store: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
    },
    {
        id: 2,
        additionalPrice: 0,
        car: {
          price: 25000,
          url: 'camaro',
          name: '2019 Chevrolet Camaro',
          image:
            'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2019/performance/camaro/colorizer/01-images/2019-camaro-coupe-2ss-gaz-colorizer.jpg?imwidth=1200',
          features: []
        },
        store: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
    },{
        id: 3,
        additionalPrice: 0,
        car: {
          price: 29470,
          url: 'charger',
          name: '2019 Dodge Charger',
          image:
            'https://s.aolcdn.com/commerce/autodata/images/USC90DOC201A021001.jpg',
          features: []
        },
        store: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
    }]
}

export const featuresReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE: 
        return {
            ...state,
            cars: state.cars.map(car => {
                console.log(state.cars.car)
                if(car.id === action.payload.car.id) {
                    return {
                        ...car,
                        additionalPrice: action.payload.car.additionalPrice + action.payload.feature.price,
                        car: {
                            ...action.payload.car.car,
                            features: [...action.payload.car.car.features, action.payload.feature]
                        },
                        store: action.payload.car.store.filter(item => item.id !== action.payload.feature.id)

                    }
                } else {
                    return car;
                }
            })
           
        }

        case REMOVE_FEATURE: 
            return {
                ...state, 
                cars: state.cars.map(car => {
                    if(car.id === action.payload.car.id) {
                        return {
                            ...car,
                            car: {...action.payload.car.car,
                            features: [...action.payload.car.car.features.filter(feature => feature.id !== action.payload.feature.id)]},
                            store: [...action.payload.car.store, action.payload.feature]
                        }
                    } else {
                        return car;
                    }
                })
            }
        default: return state;
    }
}