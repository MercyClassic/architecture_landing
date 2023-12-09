import './static/css/style.css';
import './static/css/style.min.css';
import './static/css/swiper.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';


function App() {
    return(
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
    );
}

export default App;
