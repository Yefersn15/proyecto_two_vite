import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Menu />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};
export default Layout;