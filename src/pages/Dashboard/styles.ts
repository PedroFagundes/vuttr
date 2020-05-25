import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 80px 20px;
`;

export const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    text-transform: uppercase;
  }
`;

export const ToolsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const SearchContainer = styled(Form)`
  display: flex;

  > label {
    margin-left: 18px;
  }
`;
