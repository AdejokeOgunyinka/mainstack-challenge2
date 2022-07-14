import CustomizeIcon from "../assets/customize_palette_icon.svg";
import AddIcon from "../assets/add_circle.svg";
import TextAccordionContent from "../components/editor/textAccordionContent";
import ButtonFormatAccordionContent from "../components/editor/buttonFormatAccordionContent";

export const tags = ["Branding", "Entertainment", "Design"];

export const controlStyles = {
  background: "#131316",
  border: "2px solid #1F2A35",
  boxShadow:
    "0px 12px 24px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.12)",
  borderRadius: "28px",
  width: "360px",
  height: "56px",
  align: "center",
};

export const controls = [
  { name: "Customize", icon: CustomizeIcon },
  { name: "Add element", icon: AddIcon },
];

export interface AccordionHeadersInterface {
  header: string,
  content?: React.ReactNode,
}


export const accordionHeaders: AccordionHeadersInterface[] = [
  { header: "Heading", content: <TextAccordionContent /> },
  { header: "BodyText", content: <TextAccordionContent /> },
  { header: "Button", content: <ButtonFormatAccordionContent /> },
];

export const sectionStyles = {
  background: "#FFFFFF",
  border: "1px solid #E5E8F0",
  borderRadius: "8px",
  padding: "20px",
  justify: "space-between",
  marginBottom: "20px",
};

export const sectionHeaderStyles = {
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "600",
};

export const textTypes = [
  { name: "Default", font: "Open Sans" },
  { name: "Sohne", font: "Sohne" },
  { name: "IBM Plex Sans", font: "IBM Plex Sans" },
  { name: "Source Serif...", font: "Source Serif Sans" },
  { name: "Bitter", font: "Bitter" },
];

export const buttonFormats = [
  { borderRadius: "100px" },
  {
    borderRadius: "100px",
  },
  { borderRadius: "8px" },
  {
    borderRadius: "8px",
  },
  { borderRadius: "0px" },
  {
    borderRadius: "0px",
  },
];

export const colorScheme = [
  "#242429",
  "#007AFF",
  "#FF5403",
  "#581FD2",
  "#C91C5A",
  "#027BAF",
  "#00A7B1",
  "#C01010",
  "#316B83",
  "#227A4A",
  "#A45D5D",
  "#7A224C",
  "#7A3722",
];
