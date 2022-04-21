import { useContext, useState } from 'react';
import Cart from '../../images/icon-cart.svg';

import Modal from 'react-modal';
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import del from '../../images/icon-delete.svg';
import close from '../../images/icon-close.svg'
import { Content } from './styles';

import { useCount } from '../../countContext';

export function CartItem() {

    const {addCarteValue, setAddCartValue} = useCount()

    // modal cart
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModalCart() {
        setIsOpen(true)
    }

    function closeModalCart() {
        setIsOpen(false)
    }

    function deletItem() {
        setAddCartValue(0)
    }



    return (

        <Content>
            <button
                type="button"
                onClick={openModalCart}       
            >
                <img src={Cart} alt="cart" />
            </button>


            <Modal
                isOpen={modalIsOpen} 
                onRequestClose={closeModalCart}
                overlayClassName="react-modal-cart-overlay"
                className="react-modal-cart-content"
            >

                <div className='content-cart'>
                    <div className='cart'>
                        <span>Cart</span>
                        <img 
                        onClick={closeModalCart}
                        src={close}>
                        
                        </img>
                    </div>

                    <div className='content-info'>
                        <img src={thumbnail1}/>

                        <div className='content-price'>
                            <p>Fall Limited Edition Sneakers</p>
                            <span>$125 x {addCarteValue}<span>${125 * addCarteValue}</span>
                                <img
                                onClick={deletItem}
                                src={del}/>    
                            </span>
                           
                        <button type="button">
                            Checkout
                        </button>
                        </div>

                            
                    </div>

                   
                </div>

            </Modal>
        </Content>
    )
}