import styles from './Ordenador.module.scss'
import opcoes from './Opcoes.json'
import { useState } from 'react'
import classNames from 'classnames'
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs'

interface Props {
    setOpcao: React.Dispatch<React.SetStateAction<string>>
    opcao: string
}

export default function Ordenador({ opcao, setOpcao }: Props) {
    const [aberto, setAberto] = useState(false)
    const nomeOpcao = opcao && opcoes.find((findOpcao) => findOpcao.value === opcao)?.nome

    return (
        <button className={classNames({
            [styles.ordenador]: true,
            [styles["ordenador--ativo"]]: opcao !== ""
        })} onClick={() => setAberto(!aberto)} onBlur={() => setAberto(false)}>
            <span>{opcao ? nomeOpcao : 'Ordenado Por'}</span>
            {aberto ? <BsArrowUpSquareFill size={20} /> : <BsArrowDownSquareFill size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto
            })}>
                {opcoes.map((opcao) => {
                    return (
                        <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOpcao(opcao.value)}>
                            {opcao.nome}
                        </div>
                    )
                })}
            </div>
        </button>
    )
}