import styles from './Ordenador.module.scss'
import opcoes from './Opcoes.json'


export default function Ordenador() {
    return (
        <button className={styles.ordenador}>
            <span>Ordenar Por</span>
            <div className={styles.ordenador__options}>
                {opcoes.map((opcao) => {
                    return (
                        <div className={styles.ordenado__option} key={opcao.value}>
                            {opcao.nome}
                        </div>
                    )
                })}
            </div>
        </button>
    )
}