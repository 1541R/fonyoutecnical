import { type as findCurrentItemType } from '../actions/findCurrentItem';

const defaultState = [];
let data = {};
function addData(data_) {
    data = !(data) ? data_ : {};    
}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
            
            if (!payload) {
                return null;
            }
            fetch(`https://rickandmortyapi.com/api/character/${payload}`)
                .then( res => res.json() )
                .then( data => {
                    addData(data);
                }).catch(function(error){
                    console.log('No hay error',error);
                });
            return data;
            //return items.find(n => n.id === payload);
        }

        default:
            return state;
    }
}

export default reducer;
