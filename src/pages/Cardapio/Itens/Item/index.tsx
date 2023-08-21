import logo from 'assets/logo.svg'
import styles from './Item.module.scss'

export default function Item({ children }: { children: string }) {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>Macarrão</h2>
                    <p>Descricao Macarrao</p>
                </div>
                <div className={styles.item__tags}>
                    <span className={styles.item__tipo}>Massa</span>
                    <span className={styles.item__porcao}>400g</span>
                    <span className={styles.item__qtdpessoas}>Serve 2 pessoas</span>
                    <span className={styles.item__valor}>R$40</span>
                </div>
            </div>
        </div>
    )
}