export interface ICheck {
  label: string;
  id: string;
  isError?: boolean;
  isChecked?: boolean;
  handleChange?: (e: any, index?: number) => void;
}
