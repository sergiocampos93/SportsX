import styled from 'styled-components';

import { FiTrash2, FiEdit2 } from 'react-icons/fi';

export const Container = styled.div``;

export const PageTitle = styled.h2`
  margin-top: 75px;
`;

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

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0 5px;
  text-align: left;
`;

export const TrashIcon = styled(FiTrash2)`
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    color: #0f79af;
  }
`;
export const EditIcon = styled(FiEdit2)`
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    color: #0f79af;
  }
`;
