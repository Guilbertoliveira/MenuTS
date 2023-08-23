import styles from './Item.module.scss'
import cardapio from '../itens.json'

type Props = typeof cardapio[0];

export default function Item(props: Props) {
    const { title, description, photo, category, price, size, serving } = props
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <span className={styles.item__tipo}>{category.label}</span>
                    <span className={styles.item__porcao}>{size}g</span>
                    <span className={styles.item__qtdpessoas}>Serve {serving} pessoa{serving > 1 ? 's' : ''}</span>
                    <span className={styles.item__valor}>R${price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}