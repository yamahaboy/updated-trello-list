export interface IToDoForm {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
}

export interface IProps {
  setFormDataHandler: (data: IToDoForm) => void;
}
