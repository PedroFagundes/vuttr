import styled from 'styled-components';

export const Container = styled.li`
  background: #fff;
  border: solid 1px #ebeaed;
  box-shadow: 0px 15px 20px #00000012;

  padding: 18px;

  & + li {
    margin-top: 16px;
  }

  header {
    display: flex;
    justify-content: space-between;

    h1 a {
      text-decoration: none;
      color: inherit;
    }
  }

  ul {
    list-style: none;
    margin-top: 18px;

    li {
      display: inline-block;
      margin-right: 8px;

      font-weight: 700;
    }
  }
`;
