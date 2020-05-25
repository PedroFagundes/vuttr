import React, { useContext, useCallback } from 'react';
import { FiX } from 'react-icons/fi';

import ToolInterface from '../../../models/Tool';

import ToolContext from '../../../contexts/tools';

import { Container } from './styles';

import Button from '../../Button';

interface Props {
  tool: ToolInterface;
}

const Tool: React.FC<Props> = ({ tool }) => {
  const { setToolToRemove, setModalVisibility } = useContext(ToolContext);

  const handleShowModal = useCallback(() => {
    setToolToRemove(tool);
    setModalVisibility(true);
  }, [setModalVisibility, setToolToRemove, tool]);

  return (
    <Container>
      <header>
        <h1>
          <a href={tool.link} target="_blank" rel="noopener noreferrer">
            {tool.title}
          </a>
        </h1>
        <Button
          type="button"
          variant="quartiary"
          color="danger"
          onClick={handleShowModal}
        >
          <FiX /> remove
        </Button>
      </header>
      <p>{tool.description}</p>
      <ul>
        {tool.tags.map(tag => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Tool;
