import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';


const HeroContainer = styled.div`
    position: relative;
    height: 500px;
    background: #F1F1F1;
    width: 100%;
    background: green;
`

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 100%;
  border: 2px solid red;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

function FourthHero() {
  const images = [
        "https://images.unsplash.com/photo-1567920139184-150ff48189b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1561789508-775d60abeb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1520322082799-20c1288346e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1567920139184-150ff48189b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1561789508-775d60abeb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1520322082799-20c1288346e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1567920139184-150ff48189b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1561789508-775d60abeb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1520322082799-20c1288346e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  ];
  const [scrollX, setScrollX] = useState(0);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);


  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setScrollX(scrollX => (scrollX + 1) % (images.length * 100));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    let c1 = document.getElementById('c1');
    let c2 = document.getElementById('c2');

    c2.style.left = c1.getBoundingClientRect().left;

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images.length]);

  return (
    <HeroContainer>
      <Container id="c1" ref={container2Ref} style={{ left: `${scrollX}` }}>
        {images.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
          />
        ))}
      </Container>
      <Container id="c2" ref={container2Ref} style={{ left: `${scrollX}` }}>
        {images.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
          />
        ))}
      </Container>
    </HeroContainer>
  );
}

export default FourthHero;