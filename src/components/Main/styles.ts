import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    
`;

export const ContentImage = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 3rem ;
    margin-left: 8%;
    
    button {
        border: none;
        background: transparent;
        border-radius: 20px;
        border: none;
        cursor: pointer;

        img {
            width: 28.3rem;
            height: 25rem;
            border-radius: 20px;

        }
    }
  
`;

export const Gallery = styled.div`
    display: flex;
    width: 65%;

    div {
        display: flex;
        
        ul {
            display: flex;
            
            li {
                padding: 0.6rem;
                list-style-type: none;
                
                img {
                    width: 6rem;
                    height: 6rem;
                    border-radius: 1rem;
                    cursor: pointer;
                    
                }
                
                .active {   
                    border: 3px solid var(--orange);
                    opacity: 0.7;   
                }

                img:hover {
                    opacity: 0.5;
                }
            }
        }
    }

`;

