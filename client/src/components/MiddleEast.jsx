import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

function MiddleEast() {

  const [middleeast, setMiddleEast] = useState([]);

  useEffect(() => {
    getMiddleEast();
  }, []);

  const getMiddleEast = async () => {
    const api = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=db68bd7d18e54ad993029df1877980d8&query=Middle East&number=15`);
    const data = await api.json();
    console.log(data.results);
    setMiddleEast(data.results);
  };

  return (
    <div> 
    
          <Wrapper>
            <h1>Middle Eastern Cuisine</h1>

            <Splide options={{
              perPage: 3,
              pagination: false,
              drag: 'free',
              gap: '5 rem'
            }}>
            {middleeast.map((recipe) => {
                return (
                  <SplideSlide>
                    <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} />
                  </Card>
                  </SplideSlide>
                  
                );
            })}
            </Splide>
          </Wrapper>

    </div>
);
}

const Wrapper = styled.div`
  margin: 3rem 0rem; 
    h1 {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    }
  `;

  const Card = styled.div`
  min-height: 20rem;
  margin: 50px;
  border-radius: 2rem;
  overflow: hidden;
    img{
      border-radius: 2rem;
    }
   
    p{
      text-align: center;
      margin-top: 10px;
    }
  `;

export default MiddleEast;


