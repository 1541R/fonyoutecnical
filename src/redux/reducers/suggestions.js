import { type as findSuggestionsType } from '../actions/findSuggestions';

const defaultState = [];
let data = [];

function addTodo(data_) {
    
    data = !(data.error) ? data_ : [];
}

function reducer(state = defaultState, { type, payload }) {
    
    switch (type) {
        case findSuggestionsType: {
            if (!payload) {
                return [];
            }
           
            fetch(`https://rickandmortyapi.com/api/character/?name=${payload}`)
                .then( res => res.json() )
                .then( data => {
                    addTodo(data);
                }).catch(function(error){
                    console.log('No hay error',error);
                });
            //console.log('Soy',data.results);
            return (data.results) ? data.results : state;
            //const regex = new RegExp(`^${payload}` , 'i');
            //return items.filter(n => regex.test(n.title));

        }

        default:
            return state;
    }
}

export default reducer;
