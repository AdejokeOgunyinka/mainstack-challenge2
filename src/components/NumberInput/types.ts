export interface IInput {
  label?: string;
  id?: string;
  isError?: boolean;
  type?: string;
  placeholder?: string;
  show?: boolean;
  handleChange: (e: any) => void;
  handleClick?: () => void;
  min?: number;
  max?: number;
  value?: string | number;
  stepper?: boolean;
}
