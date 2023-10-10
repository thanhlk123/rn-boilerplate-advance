import {SLICE_NAME} from '@common';

export type ITodo = {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

export const UPDATE_CHECKLIST_ACTION = SLICE_NAME.TODO + 'UPDATE_CHECKLIST';
