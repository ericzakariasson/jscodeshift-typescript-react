export interface CommonButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: string;
}

export type ButtonAppearance = "primary" | "secondary";
