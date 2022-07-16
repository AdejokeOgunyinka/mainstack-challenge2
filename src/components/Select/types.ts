export interface ISelect {
  placeholder?: string;
  id?: string;
  isError?: boolean;
  isRequired?: boolean;
  label: string;
  data: Array<string>;
  value?: string;
  handleChange?: (e: any) => void;
}
