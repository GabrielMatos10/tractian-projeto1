import styled from "styled-components";

const GlobalStyle = styled.div`
width: 100vw;
`

const Container = styled.div`
  position: relative;
  top: 60px;
  left: 400px;
  width: 400px;
  height: 150px;
`;

const Container2 = styled.div`
  position: relative;
  top: 270px;
  left: 1100px;
  width: 400px;
  height: 150px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Paragraph = styled.p`
  font-size: 20px;
`;
const Image = styled.img`
border-radius: 8px;
position: relative;
left: 400px;
top: 100px;
width: 400px;
`

function Home() {
  return (
    <GlobalStyle>
      <Container>
        <Title>O que construímos</Title>
        <Paragraph>
          Queremos que todos os profissionais de manutenção tenham acesso ao
          monitoramento online de equipamentos, e a uma plataforma “braço
          direito” que analisa, fornece insights valiosos, otimiza rotinas e
          permite tomada de decisões de forma prática e eficaz. Tudo isso só é
          possível combinando uma <strong>plataforma fácil de usar</strong> com
          um <strong> sensor IoT rápido de implementar</strong>.
        </Paragraph>
      </Container>
      <Container2>
        <Title>Nossa história</Title>
        <Paragraph>
          A TRACTIAN foi fundada em 2019 por Igor e Gabriel, que viram a vida
          inteira seus pais, coordenadores de manutenção, saindo de madrugada
          para resolver problemas nas fábricas. Ambos desde cedo trabalharam em
          indústrias, onde aprenderam a programar, até que criaram a primeira
          versão do sensor e da plataforma de monitoramento de máquinas que
          existe hoje.
        </Paragraph>
      </Container2>
      <Image src="https://imgix.tractian.com/images/our-story.png?auto=format&fit=max&w=640"/>
    </GlobalStyle>
  );
}

export default Home;
