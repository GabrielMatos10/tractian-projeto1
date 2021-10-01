import styled from "styled-components";
import { Link } from "react-router-dom";
import Btn from "./Button"


const Box = styled.div`
  background-color: var(--bg-dark);
  display: flex;
  justify-content: flex-start;

  img {
    padding: 0px 15px;
    width: 200px;
    height: 70px;
  }
`;

function Header(params) {
  return (

    <Box>
      <Link to="/">
        <img src="https://imgix.tractian.com/images/Logo-Tractian.svg" alt="Logo da Empresa" />
      </Link>
     <Btn/>
    </Box>

  );
}
export default Header;
