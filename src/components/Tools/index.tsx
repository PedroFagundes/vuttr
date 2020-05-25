import React, { useContext, useCallback } from 'react';
import { FiX, FiPlus } from 'react-icons/fi';
import api from '../../services/api';

import ToolsContext from '../../contexts/tools';

import Tool from './Tool';
import Modal from '../Modal';
import Button from '../Button';

import { Container } from './styles';

const Tools: React.FC = () => {
  const {
    tools,
    modalVisibility,
    setModalVisibility,
    toolToRemove,
  } = useContext(ToolsContext);

  const handleToggleModal = useCallback(() => {
    setModalVisibility(!modalVisibility);
  }, [modalVisibility, setModalVisibility]);

  const handleRemoveTool = useCallback(() => {
    if (toolToRemove) {
      const toolIndex = tools.findIndex(tool => tool.id === toolToRemove.id);
      api.delete(`/tools/${toolToRemove.id}`).then(response => {
        if (response.status === 200) {
          tools.splice(toolIndex, 1);
          setModalVisibility(false);
        }
      });
    }
  }, [setModalVisibility, toolToRemove, tools]);

  return (
    <Container>
      <Modal shown={modalVisibility}>
        <header>
          <h1>
            <FiPlus /> Remove tool
          </h1>
          <button type="button" onClick={handleToggleModal}>
            <FiX />
          </button>
        </header>
        <section>
          <p>
            Are you sure you want to remove <b>{toolToRemove?.title}</b>?
          </p>
        </section>
        <footer>
          <Button
            type="button"
            variant="secondary"
            color="danger"
            onClick={handleToggleModal}
          >
            Cancel
          </Button>
          <Button type="button" color="danger" onClick={handleRemoveTool}>
            Yes, remove
          </Button>
        </footer>
      </Modal>

      {tools.map(tool => (
        <Tool key={tool.id} tool={tool} />
      ))}
    </Container>
  );
};

export default Tools;
