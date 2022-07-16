export interface IInput {
  label?: any;
  id?: string;
  isError?: boolean;
  type?: string;
  placeholder?: string;
  show?: boolean;
  value?: string;
  handleChange: (e: any) => void;
  handleClick?: () => void;
}
