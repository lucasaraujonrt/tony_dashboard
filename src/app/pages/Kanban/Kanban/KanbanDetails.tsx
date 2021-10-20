import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { Divider } from 'antd';
import Card from '@portal/components/Card/Card';
import IconBlueCircle from '~/assets/svg/ic_blue_circle.svg';
import IconYellowCircle from '~/assets/svg/ic_yellow_circle.svg';
import IconGreenCircle from '~/assets/svg/ic_green_circle.svg';
import IconRedCircle from '~/assets/svg/ic_red_circle.svg';
import { Modal } from 'antd';
import { getAll, updateCard } from '@portal/store/ServiceCall/action';
import { useReduxState } from '@portal/hooks/useReduxState';
import { StatusId } from '@portal/enum/statusId';

enum KanbanColumns {
  PENDING = 'Pendente',
  CREATED = 'Criados',
  IN_PROGRESS = 'Em progresso',
  DONE = 'Finalizados',
}

enum KanbanColumnsId {
  PENDING = 1,
  CREATED = 2,
  IN_PROGRESS = 3,
  DONE = 4,
}

const KanbanDetails: React.FC = () => {
  const { kanbanList } = useReduxState().serviceCall;
  const { me } = useReduxState().user;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    if (kanbanList) {
      setInitialStates();
    }
  }, [kanbanList]);

  const [columnsFromBack, setColumnsFromBack] = useState({
    [KanbanColumns.PENDING]: {
      id: KanbanColumnsId.PENDING,
      name: KanbanColumns.PENDING,
      icon: IconRedCircle,
      items: [],
    },
    [KanbanColumns.CREATED]: {
      id: KanbanColumnsId.CREATED,
      name: KanbanColumns.CREATED,
      icon: IconBlueCircle,
      items: [],
    },
    [KanbanColumns.IN_PROGRESS]: {
      id: KanbanColumnsId.IN_PROGRESS,
      name: KanbanColumns.IN_PROGRESS,
      icon: IconYellowCircle,
      items: [],
    },
    [KanbanColumns.DONE]: {
      id: KanbanColumnsId.DONE,
      name: KanbanColumns.DONE,
      icon: IconGreenCircle,
      items: [],
    },
  });
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState();

  const grid = 3;

  const getListStyle = () => ({
    padding: grid,
    width: 250,
  });

  const getItemStyle = (
    isDragging?: boolean,
    draggableStyle?: DraggingStyle | NotDraggingStyle | undefined
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

  const onDragEnd = (result: DropResult, columns: any) => {
    if (!result.destination) return undefined;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removed);

      setColumnsFromBack(() => ({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      }));

      dispatch(
        updateCard({
          priority: removed.priority,
          status: removed.status,
          description: removed.description,
          sectorId: removed.sectorId,
          employeeId: me.id,
          id: removed.id,
        })
      );
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumnsFromBack(() => ({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      }));
    }
  };

  const handlePressCard = (item: any) => {
    setShowModal(true);
    setItemSelected(item);
  };

  const setInitialStates = () => {
    setColumnsFromBack((stateList: any) => ({
      ...stateList,
      [KanbanColumns.PENDING]: {
        ...stateList[KanbanColumns.PENDING],
        items:
          kanbanList &&
          kanbanList.filter((o: any) => o.status === StatusId.PENDING),
      },
      [KanbanColumns.CREATED]: {
        ...stateList[KanbanColumns.CREATED],
        items:
          kanbanList &&
          kanbanList.filter((o: any) => o.status === StatusId.CREATING),
      },
      [KanbanColumns.IN_PROGRESS]: {
        ...stateList[KanbanColumns.IN_PROGRESS],
        items:
          kanbanList &&
          kanbanList.filter((o: any) => o.status === StatusId.WORK_IN_PROGRESS),
      },
      [KanbanColumns.DONE]: {
        ...stateList[KanbanColumns.DONE],
        items:
          kanbanList &&
          kanbanList.filter((o: any) => o.status === StatusId.DONE),
      },
    }));
  };

  return (
    <Container fluid className="report">
      <Row>
        <Col>
          <PanelContentHeader
            pageTitle={translate('PAGES.PANEL.KANBAN.TITLE')}
            pageDescription={translate('PAGES.PANEL.KANBAN.DESCRIPTION')}
          />
        </Col>
      </Row>
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DragDropContext
          onDragEnd={(result: any) => onDragEnd(result, columnsFromBack)}
        >
          {columnsFromBack &&
            Object.entries(columnsFromBack).map(([id, column]) => (
              <div
                key={id}
                style={{
                  width: '24%',
                }}
              >
                <Droppable droppableId={id}>
                  {(provided, snapshot) => (
                    <div
                      className="droppable"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        ...getListStyle(),
                        padding: '30px',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span style={{ fontSize: 14, fontWeight: 'bold' }}>
                            {column.name}
                          </span>
                          <object
                            data={column.icon}
                            type="image/svg+xml"
                            style={{ marginLeft: 15 }}
                          ></object>
                        </div>
                        <span style={{ color: '#bbbbbb' }}>
                          Quantidade: {column.items && column.items.length}{' '}
                        </span>
                      </div>
                      {column.items &&
                        column.items.map((item: any, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(providedDraggable, snapshotDraggable) => (
                              <div
                                ref={providedDraggable.innerRef}
                                {...providedDraggable.dragHandleProps}
                                {...providedDraggable.draggableProps}
                                style={getItemStyle(
                                  snapshotDraggable.isDragging,
                                  providedDraggable.draggableProps.style
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
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <Col className="kanban__inner__title">
                  <Divider className="kanban__divider" type="vertical" dashed />
                </Col>
              </div>
            ))}
        </DragDropContext>
      </div>

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
