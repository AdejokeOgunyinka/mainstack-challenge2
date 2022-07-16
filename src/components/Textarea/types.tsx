export interface ITextarea {
  id?: string;
  isError?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  size: string;
  label: string;
  count?: number;
  value: string;
  handleChange?: (e: any) => void;
}
