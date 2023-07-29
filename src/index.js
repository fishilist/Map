import ReactDOM from 'react-dom/client';
import App from './app/App';
import {Provider} from "react-redux";
import {store} from "./assets/store";
/*import {store} from "./assets/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /*<BrowserRouter>
        <Provider store={store}>
        </Provider>
    </BrowserRouter>*/
    <Provider store={store}>
        <App/>
    </Provider>
);