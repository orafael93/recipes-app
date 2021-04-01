import styled from "styled-components";

export const TitleNewRecipe = styled.h1`
  display: flex;
  justify-content: center;

  font-size: max(45px, 3.5vw);

  color: #e84545;

  margin: 80px 0 30px;
`;

export const WrapperNewRecipe = styled.div`
  width: 100%;
  max-width: 900px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  padding: 20px;

  background: #f3f4ed;
`;

export const FormNewRecipe = styled.form`
  width: 100%;

  padding: 20px;
`;

export const WrapperAuthorAndName = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 15px;

  & input {
    padding: 10px 3px;
    font-family: "Poppins", sans-serif;
    border: none;
    outline: none;
    background: #f3f4ed;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    font-size: 1em;
    transition: 0.3s;
  }

  & input:focus {
    border-color: #e84545;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperDescription = styled.div`
  margin-bottom: 15px;

  & textarea {
    width: 100%;
    padding: 10px 3px;
    font-family: "Poppins", sans-serif;
    border: none;
    outline: none;
    background: #f3f4ed;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    font-size: 1em;
    resize: none;
  }

  & textarea:focus {
    border-color: #e84545;
  }
`;

export const WrapperNewIngredient = styled.div`
  margin-top: 20px;
  gap: 50px;
`;

export const TitleNewIngredient = styled.h2`
  color: #121212;
  font-size: 1.4em;
`;

export const WrapperIngredientToAdd = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperInputNewIngredient = styled.div`
  width: 100%;
  display: flex;
  gap: 3px;

  & input {
    display: block;
    width: 100%;
    outline: none;
    padding: 3px;
    border: 2px solid rgba(0, 0, 0, 0.6);
    transition: 0.2s ease-in-out;
  }

  & input:focus {
    border: 2px solid #e84535;
  }

  & span {
    display: inline-block;
    background: transparent;
    outline: none;
    border: none;
    padding: 5px;
    background: #121212;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
  }

  & span:hover {
    background: #e84535;
  }

  & img {
    width: 20px;
  }

  @media (max-width: 650px) {
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }
`;

export const WrapperIngredientAdded = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperItemAdded = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 5px;
  gap: 15px;

  & p {
    font-family: "Poppins", sans-serif;
    font-size: 0.9em;
    text-align: right;
  }

  & span {
    display: inline-block;
    cursor: pointer;
  }

  & img {
    width: 15px;
    min-width: 15px;
  }

  @media (max-width: 650px) {
    justify-content: flex-start;

    & p {
      text-align: left;
      margin-bottom: 6px;
      font-size: 1em;
    }
  }
`;

export const ButtonAddNewRecipe = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  & button {
    display: block;
    background: #f3f4ed;
    padding: 8px 20px;
    color: #121212;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    box-shadow: 4px 6px 0 0 #e84545;
    transition: 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    cursor: pointer;
    font-size: 1em;
    outline: none;
  }

  & button:hover {
    box-shadow: none;
  }
`;

export const WrapperBackToHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  & a {
    display: block;
    background: #f3f4ed;
    padding: 8px 20px;
    color: #121212;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    box-shadow: 4px 6px 0 0 #e84545;
    transition: 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  }

  & a:hover {
    box-shadow: none;
  }
`;