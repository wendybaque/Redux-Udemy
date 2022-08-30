// VIDEO 173 : ACTION sous forme de fonction
const BUY_PHONE='BUY_PHONE'

function buyPhone() {
    return {
        type:BUY_PHONE
    }
}

// VIDEO 174 : REDUCE
// (prevState, action) => newState

const initialState = {
    phones:5
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state, 
                phones:state.phones - 1
            }
    
        default:
            return state
    }
}

// VIDEO 175 : REDUX STORE via createStore
const store = Redux.createStore(reducer);
// Récupère la data dans le store (affiche le nb de phones dispos)
const availablesPhones = document.getElementById('count');
availablesPhones.innerHTML = store.getState().phones;
// Ajoute un écouteur d'événement du clic sur le btn :
document.getElementById('buy-phone').addEventListener('click', function() {
    store.dispatch(buyPhone())
});
// Lance le listener :
store.subscribe(() => {
    availablesPhones.innerHTML = store.getState().phones;
});

// Méthodes de redux :
// getState() = permet l'accès au store
// dispatch(action) = effectue le dispatch d'une action
// subscribe(Listener) = le listener se lance à chaque modification du state dans le store