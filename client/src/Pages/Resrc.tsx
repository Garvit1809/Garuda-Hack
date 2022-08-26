import React from 'react'

const Resrc = () => {
  return (
    <div>Resrc</div>
  )
}

export default Resrc

// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import Navbar from "../Components/GeneralComponents/Navbar";

// const Section = styled.div`
//   width: 100%;
//   min-height: calc(100vh - 4rem);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Resource = styled.div`
//   width: 80%;

//   header {
//     display: flex;
//     align-items: center;
//     margin-bottom: 1.5rem;

//     h3 {
//       margin: 0;
//       font-weight: 400;
//     }

//     hr {
//       width: 40%;
//       height: 2px;
//       border: none;
//       background-color: #dadada;
//     }
//   }
// `;

// const Oppo = styled.div`
//   div.blur {
//     filter: blur(4px);
//     -webkit-filter: blur(4px);
//   }

//   div.comingSoon {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const move = keyframes`
// 0%{ transform: translateX(100%)};
// 100%{ transform: translateX(-100%)}
// `;

// interface RowProps {
//   direction: any;
// }

// const Row = styled.div`
//   box-sizing: content-box;
//   white-space: nowrap;
//   margin: 2rem 0;
//   display: flex;
//   animation: ${move} 15s linear infinite ${(props: RowProps) => props.direction};
// `;

// const ResourceContainer = styled.div`
//   width: 15rem;
//   height: 20vh;
//   margin: 0 1rem;
//   background-color: ${(props) => props.theme.body};
//   border-radius: 20px;
//   cursor: pointer;
//   border: 1px solid blue;
// `;

// const ResourceItem = (passRef: any) => {
//   let play = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     passRef.current.style.animationPlayState = "running";
//   };

//   let pause = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     passRef.current.style.animationPlayState = "paused";
//   };

//   return (
//     <ResourceContainer
//       onMouseOver={(e) => pause(e)}
//       onMouseOut={(e) => play(e)}
//     >
//       Lorem ipsum dolor sit amet.
//     </ResourceContainer>
//   );
// };

// const Resources = () => {
//   const navigate = useNavigate();

//   const Row1Ref = useRef(null);
//   const Row2Ref = useRef(null);

//   const resorceClick = () => {
//     navigate("/resources/id");
//   };

//   return (
//     <>
//       <Navbar />
//       <Section>
//         <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
//         <Resource>
//           <header>
//             <hr />
//             <h3>ALL RESOURCES</h3>
//             <hr />
//           </header>
//           <Oppo>
//             <Row direction="none" ref={Row1Ref}>
//               <ResourceItem passRef={Row1Ref} />
//               <ResourceItem passRef={Row1Ref} />
//               <ResourceItem passRef={Row1Ref} />
//               <ResourceItem passRef={Row1Ref} />
//             </Row>
//             <Row direction="reverse" ref={Row2Ref}>
//               <ResourceItem passRef={Row2Ref} />
//               <ResourceItem passRef={Row2Ref} />
//               <ResourceItem passRef={Row2Ref} />
//               <ResourceItem passRef={Row2Ref} />
//             </Row>
//             <Row direction="none" ref={Row1Ref}>
//               <ResourceItem passRef={Row1Ref} />
//               <ResourceItem passRef={Row1Ref} />
//               <ResourceItem passRef={Row1Ref} className="blur" />
//             </Row>
//             <div className="comingSoon">More Coming Soon</div>
//           </Oppo>
//         </Resource>
//       </Section>
//     </>
//   );
// };

// export default Resources;
