import { useDispatch } from 'react-redux'

import Product, { CardapioItem, ProductProps } from '../Product/index'
import {
    Container,
    List,
    Modal,
    ModalContent,
    Information,
    CloseIcon,
} from './styles'
import { useState } from 'react'
import closeImg from '../../assets/icons/close.png'
import { Button } from '../Button/styles'

import { add, open } from '../../store/reducers/cart'

export type ProductListProps = {
    produtos: ProductProps[]
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco)
}

const ProductList = ({ produtos }: ProductListProps) => {
    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }

    const addToCart = (item : CardapioItem) => {
        dispatch(add(item))
    }
    

    const [modal, setModal] = useState({
        estaVisivel: false,
        url: '',
        title: '',
        descricao: '',
        preco: 0,
        porcao: '',
        selectedItem: {} as CardapioItem,
    })

    const openModal = (item: CardapioItem) => {
        setModal({
            estaVisivel: true,
            url: item.foto,
            title: item.nome,
            descricao: item.descricao,
            preco: item.preco,
            porcao: item.porcao,
            selectedItem: item, 
        })
    }

    const closeModal = () => {
        setModal({
            estaVisivel: false,
            url: '',
            title: '',
            descricao: '',
            preco: 0,
            porcao: '',
            selectedItem: {} as CardapioItem,
        })
    }


    return (
        <Container>
            <div className="container">
                {produtos && produtos.length > 0 ? (
                    <List>
                        {produtos.map((produto) =>
                            produto.cardapio.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => openModal(item)}
                                >
                                    <Product
                                        key={item.id}
                                        cardapio={[item]}
                                    />
                                </div>
                            ))
                        )}
                    </List>
                ) : (
                    <p>No products available.</p>
                )}
            </div>
            {modal.estaVisivel && (
                <Modal className={modal.estaVisivel ? 'visivel' : ''}>
                    <ModalContent className="container">
                        <img
                            className="productImg"
                            src={modal.url}
                            alt={modal.title}
                        />
                        <div>
                            <CloseIcon
                                src={closeImg}
                                alt="Fechar"
                                onClick={closeModal}
                            />
                            <h4>{modal.title}</h4>
                            <Information>
                                <p>{modal.descricao}</p>
                                <p>Serve: {modal.porcao}</p>
                            </Information>
                            <Button
                                type="btnModal"
                                style={{ marginTop: '16px' }}
                                onClick={() => {addToCart(modal.selectedItem); openCart()}}
                            >
                                Adicionar ao carrinho -{' '}
                                {formataPreco(modal.preco)}
                            </Button>
                        </div>
                    </ModalContent>
                    <div onClick={closeModal} className="overlay"></div>
                </Modal>
            )}
        </Container>
    )
}

export default ProductList
