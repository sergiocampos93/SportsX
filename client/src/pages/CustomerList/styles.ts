import styled from 'styled-components';

import { FiTrash2, FiEdit2 } from 'react-icons/fi';

export const Container = styled.div``;

export const Table = styled.table`
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #1b2530;
  }
`;

export const Td = styled.td`
  padding-right: 20px;
`;

export const Th = styled.th`
  padding-right: 20px;
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead`
  background-color: #1b2530;
`;

export const TrashIcon = styled(FiTrash2)`
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    color: #e8820e;
  }
`;
export const EditIcon = styled(FiEdit2)`
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    color: #e8820e;
  }
`;
