
import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
    busca: string,
    setBusca: (value: string) => void
}

export default function Buscador({ busca, setBusca }: Props) {
    return (
        <div className={styles.buscador}>
            <input value={busca} onChange={(e) => setBusca(e.target.value)} />
            <CgSearch size={20} color="#4C4D5E" />
        </div>
    )
}