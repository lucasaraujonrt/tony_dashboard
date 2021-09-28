import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
  DropResult,
} from 'react-beautiful-dnd';
import PanelContentHeader from '@portal/components/PanelContentHeader/PanelContentHeader';
import { Col, Container, Row } from 'react-bootstrap';
import { translate } from '@portal/services/i18n';
import { Button, Divider, Result } from 'antd';
import Card from '@portal/components/Card/Card';
import IconBlueCircle from '~/assets/svg/ic_blue_circle.svg';
import IconYellowCircle from '~/assets/svg/ic_yellow_circle.svg';
import IconGreenCircle from '~/assets/svg/ic_green_circle.svg';
import { useState } from 'react';
import Modal from 'antd/lib/modal/Modal';

const mockList = [
  {
    description: 'Problema no encanamento da pia daquele apartamento',
    priority: 'Alta',
    sector: 'Encanamento',
    createdAt: 'Criado em 22 de setembro',
    id: 1,
  },
  {
    description: 'Problema no encanamento da pia daquele apartamento',
    priority: 'Alta',
    sector: 'Encanamento',
    createdAt: 'Criado em 23 de setembro',
    id: 2,
  },
  {
    description: 'Problema no encanamento da pia daquele apartamento',
    priority: 'Alta',
    sector: 'Encanamento',
    createdAt: 'Criado em 24 de setembro',
    id: 3,
  },
  {
    description: 'Problema no encanamento da pia daquele apartamento',
    priority: 'Alta',
    sector: 'Encanamento',
    createdAt: 'Criado em 25 de setembro',
    id: 4,
  },
];

const mockListSelected = [
  {
    description: 'Problema no encanamento da pia daquele apartament,o',
    priority: 'Alta',
    sector: 'Encanamento',
    createdAt: 'Criado em 22 de setembro',
  },
  {
    description: 'Problema no encanamento da pia daquele apartament,o',
    priority: 'Alta',
    sector: 'Encanamento',
    createdAt: 'Criado em 23 de setembro',
  },
  {
    description: 'Problema no encanamento da pia daquele apartament,o',
    priority: 'Alta',
    sector: 'Encanamento',
    createdAt: 'Criado em 24 de setembro',
  },
  {
    description: 'Problema no encanamento da pia daquele apartament,o',
    priority: 'Alta',
    sector: 'Encanamento',
    createdAt: 'Criado em 25 de setembro',
  },
];

const KanbanDetails: React.FC = () => {
  const [list, setList] = useState(mockList);
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState();
  const [listSelected, setListSelected] = useState(mockListSelected);

  const grid = 3;

  const getListStyle = () => ({
    padding: grid,
    width: 250,
  });

  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
  ) => ({
    ...draggableStyle,
    padding: grid * 2,
    paddingBottom: '10px',
    width: '300px',
    height: '170px',
    margin: `0 0 ${grid * 2}px 0`,
    borderRadius: '8px',
    background: isDragging ? 'lightblue' : 'transparent',
  });

  const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (
    source: any,
    destination: any,
    droppableSource: any,
    droppableDestination: any
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result: any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) return;

    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(list[sInd], source.index, destination.index);
      const newState = [...list];
      //@ts-ignore
      newState[sInd] = items;
      setList(newState);
    } else {
      const result = move(list[sInd], list[dInd], source, destination);
      const newState = [...list];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      //@ts-ignore
      setList(newState.filter((group) => group.length));
    }
  };

  const handlePressCard = (item: any) => {
    setShowModal(true);
    setItemSelected(item);
  };

  return (
    <Container fluid className="details">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.PANEL.KANBAN.TITLE')}
            pageDescription={translate('PAGES.PANEL.KANBAN.DESCRIPTION')}
          />
        </Col>
      </Row>
      <Divider />
      <DragDropContext onDragEnd={onDragEnd}>
        <Row>
          <Col className="kanban__inner__title">
            Criados
            <img
              src={IconBlueCircle}
              alt="Icone círculo criado"
              className="kanban__inner__icon"
            />
            <Droppable droppableId="droppableCreated">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle()}>
                  <div className="kanban__inner__board">
                    {list.map((item, index) => (
                      <Draggable
                        index={index}
                        key={item.id}
                        draggableId={item.id.toString()}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <Card
                              onClick={() => handlePressCard(item)}
                              {...item}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
              )}
            </Droppable>
          </Col>

          <Col className="kanban__inner__title">
            <Divider className="kanban__divider" type="vertical" dashed />
          </Col>

          <Col className="kanban__inner__title">
            Em progresso
            <img
              src={IconYellowCircle}
              alt="Icone círculo em progresso"
              className="kanban__inner__icon"
            />
            <Droppable droppableId="droppableProgress">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle()}>
                  <div className="kanban__inner__board">
                    {list.map((item, index) => (
                      <Draggable
                        index={index}
                        key={item.id}
                        draggableId={item.id.toString()}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <Card
                              onClick={() => handlePressCard(item)}
                              {...item}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
              )}
            </Droppable>
          </Col>

          <Col className="kanban__inner__title">
            <Divider className="kanban__divider" type="vertical" dashed />
          </Col>

          <Col className="kanban__inner__title">
            Finalizados
            <img
              src={IconGreenCircle}
              alt="Icone círculo finalizado"
              className="kanban__inner__icon"
            />
            <div className="kanban__inner__board">
              <Card
                onClick={() => {}}
                description="Problema no encanamento da pia daquele apartamento"
                priority="Alta"
                sector="Encanamento"
                createdAt="Criado em 22 de setembro"
              />

              <Card
                onClick={() => {}}
                description="Problema no encanamento da pia daquele apartamento"
                priority="Alta"
                sector="Encanamento"
                createdAt="Criado em 22 de setembro"
              />
              <Card
                onClick={() => {}}
                description="Problema no encanamento da pia daquele apartamento"
                priority="Alta"
                sector="Encanamento"
                createdAt="Criado em 22 de setembro"
              />
              <Card
                onClick={() => {}}
                description="Problema no encanamento da pia daquele apartamento"
                priority="Alta"
                sector="Encanamento"
                createdAt="Criado em 22 de setembro"
              />
              <Card
                onClick={() => {}}
                description="Problema no encanamento da pia daquele apartamento"
                priority="Alta"
                sector="Encanamento"
                createdAt="Criado em 22 de setembro"
              />
            </div>
          </Col>
        </Row>
      </DragDropContext>
      <Modal
        // @ts-ignore
        title={itemSelected?.description || ''}
        visible={showModal}
        cancelText="Fechar"
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <div>
          <span>bla bla bla bla bla bauhdhuhuas</span>
          <span>bla bla bla bla bla bauhdhuhuas</span>
          <span>bla bla bla bla bla bauhdhuhuas</span>
        </div>
      </Modal>
    </Container>
  );
};

export default KanbanDetails;
