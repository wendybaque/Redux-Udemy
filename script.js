// Méthodes de redux :
// getState() = permet l'accès au store
// dispatch(action) = effectue le dispatch d'une action
// subscribe(Listener) = le listener se lance à chaque modification du state dans le store

// VIDEO 173 : ACTIONS sous forme de fonction
const BUY_PHONE='BUY_PHONE';
const BUY_TABLET='BUY_TABLET';
const BUY_TV='BUY_TV';


function buyPhone() {
    return {
        type:BUY_PHONE
    }
}

function buyTablet() {
    return {
        type:BUY_TABLET
    }
}

function buyTv() {
    return {
        type:BUY_TV
    }
}

// VIDEO 174 : REDUCER
// (prevState, action) => newState

const PhoneInitialState = {
    phones:5,
    tablets:10
}

// Reducer 1 (phones + tablets)
const PhonesReducer = (state=PhoneInitialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state, 
                phones:state.phones - 1
            }
        break;
        case BUY_TABLET:
            return {
                ...state, 
                tablets:state.tablets - 1
            }
    
        default:
            return state
    }
}

// VIDEO 176 : Reducer 2 + state (tvs)

const TvInitialState = {
    tvs:20
}
const TvReducer = (state=TvInitialState, action) => {
    switch (action.type) {
        case BUY_TV:
            return {
                ...state, 
                tvs:state.tvs - 1
            }

        default:
            return state
    }
}

// VIDEO 175 : REDUX STORE via createStore :
// const store = Redux.createStore(PhonesReducer);

// VIDEO 177 : combinaison des reducer :
const rootReducer = Redux.combineReducers({
    phones:PhonesReducer,
    tvs:TvReducer
})

const store = Redux.createStore(rootReducer);

// Récupère la data dans le store (affiche le nb de phones dispos) :
const availablesPhones = document.getElementById('count');
availablesPhones.innerHTML = store.getState().phones.phones;

// VIDEO 176 : gestion de plusieurs actions (ajout de la vente de tablettes) :
// Récupère la data dans le store (affiche le nb de tablettes dispos) :
const availablesTablets = document.getElementById('count-tab');
availablesTablets.innerHTML = store.getState().phones.tablets;

// VIDEO 177 : gestion de plusieurs actions (ajout de la vente de tv) :
// Récupère la data dans le store (affiche le nb de tablettes dispos) :
const availablesTvs = document.getElementById('count-tv');
availablesTvs.innerHTML = store.getState().tvs.tvs;

// Dispatch : Ajoute un écouteur d'événement du clic sur le btn :
document.getElementById('buy-phone').addEventListener('click', function() {
    store.dispatch(buyPhone())
});
// Dispatch : Ajoute un écouteur d'événement du clic sur le btn :
document.getElementById('buy-tab').addEventListener('click', function() {
    store.dispatch(buyTablet())
});

// Dispatch : Ajoute un écouteur d'événement du clic sur le btn :
document.getElementById('buy-tv').addEventListener('click', function() {
    store.dispatch(buyTv())
});

// Lance le listener :
store.subscribe(() => {
    availablesPhones.innerHTML = store.getState().phones.phones;
    availablesTablets.innerHTML = store.getState().phones.tablets;
    availablesTvs.innerHTML = store.getState().tvs.tvs;
});