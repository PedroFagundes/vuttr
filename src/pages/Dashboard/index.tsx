import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Form } from '@unform/web';
import { FiSearch, FiPlus, FiX } from 'react-icons/fi';
import api from '../../services/api';

import ToolsContext from '../../contexts/tools';

import { Container, Header, ToolsHeader, SearchContainer } from './styles';

import TextInput from '../../components/TextInput';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import Tools from '../../components/Tools';
import Modal from '../../components/Modal';

const Dashboard: React.FC = () => {
  const { tools, setTools } = useContext(ToolsContext);
  const [searchTerm, setSearchTerm] = useState(null);
  const [tagsOnly, setTagsOnly] = useState(false);
  const [addToolModalVisibility, setAddToolModalVisibility] = useState(false);

  const queryTools = useCallback(() => {
    let queryUrl;
    if (searchTerm) {
      queryUrl = `/tools?${tagsOnly ? 'tags_like' : 'q'}=${searchTerm}`;
    } else {
      queryUrl = '/tools';
    }
    api.get(queryUrl).then(response => {
      setTools(response.data);
    });
  }, [searchTerm, setTools, tagsOnly]);

  useEffect(() => {
    queryTools();
  }, [queryTools]);

  const handleSearchInput = useCallback(event => {
    const filter = event.target.value;

    setSearchTerm(filter);
  }, []);

  const handleTagsOnlyCheckbox = useCallback(event => {
    setTagsOnly(event.target.checked);
  }, []);

  const handleToggleAddToolModal = useCallback(() => {
    setAddToolModalVisibility(!addToolModalVisibility);
  }, [addToolModalVisibility]);

  const handleAddToolSubmit = useCallback(
    data => {
      const tags = data.tags.split(' ');
      const toolData = { ...data, tags };

      api.post('/tools', toolData).then(response => {
        setTools([...tools, response.data]);
      });

      handleToggleAddToolModal();
    },
    [handleToggleAddToolModal, setTools, tools],
  );

  return (
    <Container>
      <Header>
        <h1>Vuttr</h1>
        <h3>Very Useful Tools to Remember</h3>
      </Header>

      <Modal shown={addToolModalVisibility}>
        <Form onSubmit={handleAddToolSubmit}>
          <header>
            <h1>
              <FiPlus /> Add tool
            </h1>
            <button type="button" onClick={handleToggleAddToolModal}>
              <FiX />
            </button>
          </header>
          <section>
            <TextInput
              name="title"
              label="Tool name"
              placeholder="awesome-tool"
              required
              autoComplete="off"
            />
            <TextInput
              name="link"
              label="Tool link"
              placeholder="https://github.com/awesome-tool/awesome-tool"
              required
              autoComplete="off"
            />
            <TextInput
              name="description"
              label="Tool description"
              placeholder="awesome-tool description"
              required
            />
            <TextInput
              name="tags"
              label="Tags"
              placeholder="tool node organizing"
              autoComplete="off"
            />
          </section>
          <footer>
            <Button type="submit">Add tool</Button>
          </footer>
        </Form>
      </Modal>

      <ToolsHeader>
        <SearchContainer onSubmit={() => console.log('Foo')}>
          <TextInput
            icon={FiSearch}
            name="search"
            placeholder="search"
            autoComplete="off"
            onInput={handleSearchInput}
          />
          <Checkbox
            label="search in tags only"
            onChange={handleTagsOnlyCheckbox}
          />
        </SearchContainer>
        <Button onClick={handleToggleAddToolModal}>
          <FiPlus /> Add
        </Button>
      </ToolsHeader>
      <Tools />
    </Container>
  );
};

export default Dashboard;
