import styled from "styled-components";

export const ContentAside = styled.aside`
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
`;

export const ContentText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    position: relative;
    margin-bottom: 2rem;

    div {
        
        padding-left: 5rem;

        h3 {
            color: var(--orange);
            font-family: 'Kumbh Sans', sans-serif;
            margin-bottom: 1rem;
            letter-spacing: 2px;
        }

        h1 {
            color: var(--veryBlue);
            font-weight: 700;
            font-size: 3rem;
            margin-bottom: 1.5rem;
            width: 70%;
        }

        p {
            font-size: 1rem;
            font-family: 'Kumbh Sans', sans-serif;
            color: var(--blueGrayishDark);
            letter-spacing: 1px;
            line-height: 25px;
            width: 80%;
        }
    }
`;

export const ContentPrice = styled.div`
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    padding-left: 5rem;
    

    .price {
        span {
            font-size: 1.7rem;
            font-weight: 700;
            font-family: 'Kumbh Sans', sans-serif;
            margin-right: 1rem;
            
        }

        span:nth-child(2) {
            background: var(--orangePale);
            color var(--orange);
            padding: 0.2rem 0.3rem;
            border-radius: 5px;
            font-size: 1.3rem;
            
        }

        p {
            margin-top: 0.8rem;
            font-weight: 700;
            font-family: 'Kumbh Sans', sans-serif;
            color: var(--blueGrayish);
            font-size: 1rem;
            text-decoration: line-through;
        }
    }

    .addCart {
        margin-top: 1.3rem;
        display: flex;

        button[type=button] {
            border: none;
            padding: 1rem 1.2rem;
            
            background: var(--blueGrayish);
            
            cursor: pointer;
        }

        .numInc {
            font-weight: bold;
            font-size: 1.2rem;
            color: black;

        }
        

        button.minus{
            border-radius: 7px 0 0 7px;
        }

        button.plus{
            border-radius: 0 7px 7px 0;
        }

        /* span {
            
            padding: 14px 1.1rem 16px 1.1rem;
            background: var(--blueGrayish);
            font-weight: 700;
            font-family: 'Kumbh Sans', sans-serif;
        } */

        button.cart {
            margin-left: 2rem;
            padding: 0.9rem 5rem;
            background: var(--orange);
            border-radius: 8px;
            font-weight: 700;
            font-family: 'Kumbh Sans', sans-serif;
            letter-spacing: 2px;
            color: var(--white);
            display: flex;
            align-items: center;
            
             svg {
                margin-right: 20px;
            }

            
        }
        button.cart:hover{
                opacity: 0.7;
            }
    }
`;