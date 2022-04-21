import { Content } from './../components/Header/styles';
import {createGlobalStyle} from "styled-components"; 

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    :root {
        --orange: hsl(26, 100%, 55%);
        --orangePale: hsl(25, 100%, 94%);

        --veryBlue: hsl(220, 13%, 13%);
        --blueGrayishDark: hsl(219, 9%, 45%);
        --blueGrayish: hsl(220, 14%, 75%);
        --blueLight: hsl(223, 64%, 98%);
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%, 75% );
    }

    html, body {
        max-width: 1441px;
        width: 100vw;
        height: 100vh;
        background: var(--white);        
    }

    
    /* moodal das images da galeria */
    .react-modal-overlay {
        background: var(--black);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    } 

    .react-modal-content {
        width: 100%;
        max-width: 650px;
        padding: 3rem;
        position: relative;

            button {
                svg path:hover {
                    stroke: hsl(26, 100%, 55%);       
                }
            }
 

        div {
            width: 100%;
            display: flex;
            align-items: center;

            button {
                
            }
            
            img {
                width: 100%;
                border-radius: 15px; 
            }
        }

        .handleNext, .handlePreview {
          z-index: 9;  
          display: flex;
          align-items: center;
          flex-direction: center;
          width: 60px;
          height: 60px;
          border-radius: 100%;
          padding: 1rem;
          cursor: pointer;    
            
        }
          
    }

    .react-modal-close {
        position: absolute;
        right: 6rem;
        
        top: 1rem;
        border: 0;
        background: transparent;
        cursor: pointer;
        /* transition: filter(2s); */

        svg path{
            fill: hsl(0, 0%, 100%);

            &:hover {
                fill: hsl(26, 100%, 55%);
            }
            
        }
    }

    /* Modal do cart */
    .react-modal-cart-overlay {
       
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 20px;
        position: fixed;
        top: 6rem;
        background: var(--white);
        right: 8rem;
        width: 500px;
        height: 290px;
    }

    .react-modal-cart-content {
        .content-cart {
            margin: 0 auto;
            width: 100%;
            height: 90%;
            position: absolute;
            
        }

         .cart{
            display: flex;
            justify-content: space-between;
            font-size: 1.4rem;
            font-weight: 700;
            padding: 20px;
            font-family: "Kumbh Sans", sans-serif;
            border-bottom: 1px solid var(--blueGrayish);

            img {
                width: 15px;
                height: 18px;
                cursor: pointer;

                
            }
            
           img:hover {
                color: orange;
            }


        }

        .content-info {
            padding: 1.5rem;
            display: flex;
            

            p {
                letter-spacing: 0.5px; 
                width: 100%;
                font-family: "Kumbh Sans", sans-serif;
                margin-left: 1rem;
                font-size: 1.3rem;
                font-weight: 400;
                color: var(--veryBlue)
            }

            img {
                width: 80px;
                height: 80px;
                border-radius: 5px;
            }

            span {
                margin-top: 10px;
                font-family: "Kumbh Sans", sans-serif;
                font-weight: 400;
                margin-left: 1rem;
                color: var(--veryBlue);

                span {
                    font-weight: 700;
                    font-family: "Kumbh Sans", sans-serif;
                }
            }

           
            
        }

        .content-price {
            display: flex;  
            flex-direction: column;          
            font-family: "Kumbh Sans", sans-serif;
            font-size: 1.1rem;
            color: var(--veryBlue);

            button {
                /* margin-left: 1.5rem; */
                width: 60vh;
                margin-top: 2.5rem;
                margin-left: -5rem;
                padding: 1.5rem 1.3rem;
                background: var(--orange);
                color: white;
                border: none;
                border-radius: 10px;
                font-size: 1.3rem;
                cursor: pointer;
            }
          
            img {
                width: 20px;
                height: 20px;
                margin-left: 4rem;
                cursor: pointer;
            }

            /* button {
                margin-left: 1.5rem;
                
                margin-top: 2.5rem;
                width: 100%;
                padding: 1.5rem 1.3rem;
                background: var(--orange);
                color: white;
                border: none;
                border-radius: 10px;
                font-size: 1.3rem;
                cursor: pointer;
            }
             */
        }
    }

`;