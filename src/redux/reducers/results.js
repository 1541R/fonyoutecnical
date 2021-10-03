import { type as findResultsType } from '../actions/findResults';
import items from '../../data/items';

const defaultState = [];
let data = [];
function addTodo(data_) {
    
    data = !(data.error) ? data_ : [];
}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            if (!payload) {
                return [];
            }
            //console.log(payload);
            //const regex = new RegExp(`^${payload}` , 'i');
            //return items.filter(n => regex.test(n.title));
            fetch(`https://rickandmortyapi.com/api/character/?name=${payload}`)
                .then( res => res.json() )
                .then( data => {
                    addTodo(data);
                }).catch(function(error){
                    console.log('No hay error',error);
                });
            //console.log('Soy',data.results);
            return (data.results) ? data.results : state;


        }

        default:
            return state;
    }
}

export default reducer;
