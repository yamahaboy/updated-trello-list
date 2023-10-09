export interface IToDoForm {
  id: number;
  title: string;
  description: string;
}

export interface IProps {
  setFormDataHandler: (data: IToDoForm) => void;
}
