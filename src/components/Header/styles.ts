import styled from "styled-components";

export const Container = styled.header`
  width: 80vw;
  max-width: 1440px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  padding: 3rem 0;
  border-bottom: 2px solid var(--blueLight);

  div {
    display: flex;
    align-items: center;
    .logo {
      width: 11rem;
      height: 2rem;
    }

    ul {
      display: flex;
      margin-left: 2rem;

      li {
        list-style-type: none;
        margin-left: 2rem;
        font-family: "Kumbh Sans", sans-serif;
        font-weight: 400;

        a {
          text-decoration: none;
          color: var(--blueGrayishDark);
          padding-bottom: 2.4rem;
        }
      }
    }

    a:hover {
      color: var(--veryBlue);
      border-bottom: 4px solid var(--orange);
    }
  }
`;

export const Content = styled.div`
  .profile {
    background: transparent;
    border: none;
    margin-left: 2rem;
    cursor: pointer;
  }

  .profile {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

     .profile:hover {
      border-radius: 50px 50px;
      border: 2px solid var(--orange);
    }
  
`;
