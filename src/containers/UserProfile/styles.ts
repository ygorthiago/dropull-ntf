import styled from "styled-components";

export const UserProfileContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UserProfileCardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.875rem;

  img {
    width: 100vw;
  }

  @media (min-width: 768px) {    
    img {
      height: 15.625rem;
      width: 100%;
      object-fit: cover;
    }
  }
`

export const UserProfileCardInfos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -4.125rem;
  padding: 0 1.25rem;

  img {
    width: 8.125rem;
    height: 8.125rem;
    border-radius: 50%;
    box-shadow: 0 0 0 3pt var(--background);
    border: 3px solid #13ff00;
  }

  h2 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    margin-bottom: 0.625rem;
  }

  legend {
    font-size: 0.813rem;
    line-height: 1.25rem;
    text-align: left;
  }

  @media (min-width: 768px) {
    width: 768px;
  }
`

export const CollectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1.25rem;

  h2 {
    font-size: 1.25rem;
    line-height: 2rem;
    width: 100%;
    text-align: left;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 768px) {
    width: 768px;
  }
`

export const CollectionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`
