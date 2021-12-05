/* eslint-disable jsx-a11y/alt-text */
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
import { priority, priorityColors } from '@portal/utils/priority';
import * as MessageService from '@portal/services/message';
import { maskCEP } from '@portal/services/masks';

enum KanbanColumns {
  PENDING = 'Em criação',
  CREATED = 'Pendente',
  IN_PROGRESS = 'Em progresso',
  DONE = 'Finalizados',
}

enum KanbanColumnsId {
  CREATING = 1,
  PENDING = 2,
  WORK_IN_PROGRESS = 3,
  DONE = 4,
}

const columnsStatus: any = [
  {
    id: KanbanColumnsId.CREATING,
    name: 'Pendente',
  },
  {
    id: KanbanColumnsId.PENDING,
    name: 'Criados',
  },
  {
    id: KanbanColumnsId.WORK_IN_PROGRESS,
    name: 'Em progresso',
  },
  {
    id: KanbanColumnsId.DONE,
    name: 'Finalizados',
  },
];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kanbanList]);

  const [columnsFromBack, setColumnsFromBack] = useState({
    [KanbanColumns.PENDING]: {
      id: KanbanColumnsId.CREATING,
      name: KanbanColumns.PENDING,
      icon: IconRedCircle,
      items: [],
    },
    [KanbanColumns.CREATED]: {
      id: KanbanColumnsId.PENDING,
      name: KanbanColumns.CREATED,
      icon: IconBlueCircle,
      items: [],
    },
    [KanbanColumns.IN_PROGRESS]: {
      id: KanbanColumnsId.WORK_IN_PROGRESS,
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
  const [itemSelected, setItemSelected] = useState<any>(null);

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
      if (
        source.droppableId === KanbanColumns.PENDING ||
        source.droppableId === KanbanColumns.DONE ||
        destination.droppableId === KanbanColumns.PENDING
      ) {
        MessageService.warn(
          `Os status ${KanbanColumns.PENDING} ou ${KanbanColumns.DONE} não podem ser trocados manualmente`
        );
        return;
      }

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
          status: searchColumn(destination).id,
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

  const searchColumn = (destination: any) =>
    columnsStatus.find((o: any) => o.name === destination.droppableId);

  const handlePressCard = (item: any) => {
    setShowModal(true);

    setItemSelected(item);
  };

  const setInitialStates = () => {
    try {
      setColumnsFromBack((stateList: any) => ({
        ...stateList,
        [KanbanColumns.PENDING]: {
          ...stateList[KanbanColumns.PENDING],
          items:
            kanbanList &&
            kanbanList.filter((o: any) => o.status === StatusId.CREATING),
        },
        [KanbanColumns.CREATED]: {
          ...stateList[KanbanColumns.CREATED],
          items:
            kanbanList &&
            kanbanList.filter((o: any) => o.status === StatusId.PENDING),
        },
        [KanbanColumns.IN_PROGRESS]: {
          ...stateList[KanbanColumns.IN_PROGRESS],
          items:
            kanbanList &&
            kanbanList.filter(
              (o: any) => o.status === StatusId.WORK_IN_PROGRESS
            ),
        },
        [KanbanColumns.DONE]: {
          ...stateList[KanbanColumns.DONE],
          items:
            kanbanList &&
            kanbanList.filter((o: any) => o.status === StatusId.DONE),
        },
      }));
    } catch (e) {
      console.log(e);
    }
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
          onDragEnd={(result: DropResult) => onDragEnd(result, columnsFromBack)}
        >
          {columnsFromBack &&
            Object.entries(columnsFromBack).map(([id, column]) => (
              <div
                key={id}
                style={{
                  width: '25%',
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
                                  {...item}
                                  description={
                                    item?.description.length > 40
                                      ? `${item?.description.substr(0, 40)}...`
                                      : item?.description || ''
                                  }
                                  priority={
                                    priority.find(
                                      (o) => o.value === item.priority
                                    )?.name
                                  }
                                  sector={item?.sector?.name as string}
                                  onClick={() => handlePressCard(item)}
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
        title={
          itemSelected?.description.length > 40
            ? `${itemSelected?.description.substr(0, 40)}...`
            : itemSelected?.description || ''
        }
        visible={showModal}
        cancelText="Fechar"
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <div>
          <span>{(itemSelected && itemSelected?.description) || ''}</span>

          <div
            style={{ display: 'flex', padding: '20px 0' }}
            className="card__inner__tags"
          >
            <div
              className="card__inner__priority"
              style={{
                backgroundColor:
                  itemSelected &&
                  priorityColors.find((o) => o.value === itemSelected.priority)
                    ?.colors,
                display: 'flex',
                alignItems: 'center',
                borderRadius: '15px',
                padding: '1px 11px',
                marginRight: '12px',
              }}
            >
              <span
                style={{ fontSize: ' 13px', color: 'white' }}
                className="card__inner__priority__text"
              >
                {itemSelected &&
                  priority.find((o) => o.value === itemSelected.priority)?.name}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: ' teal',
                borderRadius: '15px',
                padding: ' 1px 11px',
              }}
              className="card__inner__sector"
            >
              <span
                style={{ fontSize: ' 13px', color: 'white' }}
                className="card__inner__sector__text"
              >
                {itemSelected && itemSelected.sector.name}
              </span>
            </div>
          </div>

          <p>
            Cliente:{' '}
            <strong>
              {itemSelected && itemSelected.client && itemSelected.client?.name}
            </strong>{' '}
          </p>
          <Col>
            <Row>
              {itemSelected &&
                itemSelected.client &&
                itemSelected.client?.address}
            </Row>
            <Row>
              {itemSelected &&
                itemSelected.client &&
                itemSelected.client?.district}
            </Row>
            <Row>
              {itemSelected && itemSelected.client && itemSelected.client?.city}{' '}
              - {itemSelected && itemSelected.client && itemSelected.client?.uf}
            </Row>
            <Row>
              {itemSelected && itemSelected.client && itemSelected.client.cep
                ? maskCEP(itemSelected.client.cep)
                : ''}
            </Row>
          </Col>
        </div>
      </Modal>
    </Container>
  );
};

export default KanbanDetails;
