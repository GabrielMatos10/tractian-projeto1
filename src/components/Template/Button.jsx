import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  margin-left: 500px;
`;

const StyleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function Btn(props) {
  return (
    <Box>
      <Link to="/assets">
        <StyleButton size="small" variant="contained">
          Assets
        </StyleButton>
      </Link>
      <Link to="/users">
        <StyleButton size="small" variant="contained">
          Users
        </StyleButton>
      </Link>
      <Link to="graphs">
      <StyleButton size="small" variant="contained">
        Graphics
      </StyleButton>
      </Link>
      <Link to="register">
      <StyleButton size="small" variant="contained">
        Register
      </StyleButton>
      </Link>
    </Box>
  );
}

export default Btn;
