import { useEffect, useState } from 'react'
import Item from './Item'
import cardapio from './itens.json'
import styles from './Itens.module.scss'

interface props {
    filtro: number | null,
    busca: string,
    opcao: string
}


export default function Itens(props: props) {

    const { busca, filtro, opcao } = props
    const [lista, setLista] = useState(cardapio);

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista))
    }, [busca, filtro, opcao]);


    function ordenar(novaLista: typeof cardapio) {
        switch (opcao) {
            case 'porcao':
                return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case 'preco':
                return novaLista.sort((a, b) => a.price > b.price ? 1 : -1)
            default:
                return novaLista
        }
    }

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i')
        return regex.test(title)
    }

    function testaFiltro(id: number) {
        console.log(filtro)
        if (filtro) {
            return filtro === id;
        }
        return true
    }

    return (
        <div className={styles.itens}>
            {lista.map((item) => (<Item key={item.id} {...item} />))}
        </div>)
}