export interface CardConfiguration {
  title: string;
  navigation?: string;
  onClick?: (value: string) => void;
}