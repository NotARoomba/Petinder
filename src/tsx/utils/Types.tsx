export interface NavButtonProps {
  route: string;
  text: string;
  image: string;
}
export interface CardProps {
    image: string;
    name: string;
    description: string;
}
export enum ThemeState {
  DARK='dark',
  LIGHT='light'
}

export interface Center {
  name: string;
  direction: string;
  lat: number;
  long: number;
}

export interface Pet {
  name: string;
  animal: string;
  color: string;
  image: string;
  center: Center;
  size: string;
  age: number;
  hypoallergenic: boolean;
}

export interface FilterProps {
  pets: Array<Pet>;
  setData: (pets: Pet[]) => (void);
}

export interface FilterDropdownProps {
  filter: string;
  options?: Array<Option>;
  property: keyof Pet;
  pets: Array<Pet>;
  setData: (pets: Pet[]) => (void);
}

export interface Option {
  label: string;
  value: number | Array<number> | string;
}

export interface ThemeButtonProps {
  theme: ThemeState;
  changeTheme: () => void;
}

export interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
  opacity: number;
}