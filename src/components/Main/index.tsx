
import { Container, ContentImage, Gallery } from './styles'
import { useState } from 'react';
import Modal from 'react-modal'


import thumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../images/image-product-4-thumbnail.jpg'

import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import { Pagecart } from '../Pagecart';

Modal.setAppElement('#root')

export function Main() {

    const images = [product1, product2, product3, product4]

    // img do modal por padrao produto1
    const [selectedImage, setSelectedImage] = useState(product1)
    // const [currentImage, setCurrentImage] = useState(0);

    // estado do modal
    const [modalIsOpen, setIsOpen] = useState(false)


    // função para abrir o modal
    function openModal() {
        setIsOpen(true)
    }

    //função para fechar o modal
    function closeModal() {
        setIsOpen(false)
    }

      //Função para passar as fotos  
      function goToNextImage() {
        let indexNextImage = images.indexOf(selectedImage) + 1
         setSelectedImage(images[indexNextImage])

        if(indexNextImage > 3) {
          return setSelectedImage(images[0])
        }      
      }
        
      //Função para passar as fotos
      function goToPreviousImage() {
        let indexPrevImage = images.indexOf(selectedImage) - 1
            setSelectedImage(images[indexPrevImage])

        if(indexPrevImage < 0) {
            return setSelectedImage(images[3])
        }
      }
      

    return (
        <Container>
            <ContentImage>
                <button
                    type="button"
                    onClick={openModal}
                >
                    <img src={selectedImage} alt="Product" />
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                >
                    {/* icone para fechar o modal */}
                    <button
                        type="submit"
                        onClick={closeModal}
                        className="react-modal-close">
                        <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" /></svg>
                    </button>

                    {/* div com a imagem do produto */}

                    <div>
                        <button
                            type="button"
                            className='handleNext'
                            onClick={goToPreviousImage}
                        >
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                        </button>
                    <div>
                        

                        <img src={selectedImage} alt="Product" />
                        
                    </div>
                        <button
                            type="button"
                            className='handlePreview'
                            onClick={goToNextImage}
                        >
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                        </button>
                    </div>

                    <Gallery />

                </Modal>

                <Gallery>
                    <div>
                        <ul>
                            <li>
                                <img
                                    className={selectedImage === product1 ? 'active' : undefined}
                                    src={thumbnail1}
                                    alt="Produto"
                                    onClick={() => setSelectedImage(product1)}
                                />
                            </li>

                            <li>
                                <img
                                    className={selectedImage === product2 ? 'active' : undefined}
                                    src={thumbnail2}
                                    alt="Produto"
                                    onClick={() => setSelectedImage(product2)} />
                            </li>

                            <li>
                                <img
                                    className={selectedImage === product3 ? 'active' : undefined}
                                    src={thumbnail3}
                                    alt="Produto"
                                    onClick={() => setSelectedImage(product3)}
                                />
                            </li>

                            <li>
                                <img
                                    className={selectedImage === product4 ? 'active' : undefined}
                                    src={thumbnail4}
                                    alt="Produto"
                                    onClick={() => setSelectedImage(product4)}
                                />
                            </li>
                        </ul>
                    </div>
                </Gallery>
            </ContentImage>

            <Pagecart />
        </Container>
    )
}