import NavBar from './navbar';
import styles from './header.module.css';

type HeaderProps = {
    children? :React.ReactNode;
};

export default function Header( {children}: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}> CSE3CWA Assignment 1</h1>
                <h3 className={styles.subTitle}> 21612368</h3>
            </div>
                <NavBar>
                    {children}
                </NavBar>
        </header>
    )
}