import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: "user",
};
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function configureStore (initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(rootReducer(history));
    });
  }
  return store;
}