import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';


const NotFound = () => {
    return(
        <>
            <Header />
                <main>
                    <div>
                        Страница не найдена
                        <Link to="/"> Вернуться на главную страницу </Link>
                    </div>
                </main>
            <Footer />
        </>
    );
}

export default NotFound;
