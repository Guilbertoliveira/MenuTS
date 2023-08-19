import { useState } from 'react';
import Buscador from './Buscador';
import styles from './Cardapio.module.scss'
import logo from '@assets/logo.svg';

export default function Cardapio() {
    const [busca, setBusca] = useState('');

    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
            </section>
        </main>
    )
}