import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyle?: string;
    rightIcon?: string;
    isDisable?: boolean;
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
};
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export type CarState = CarProps[] & { message?: string };

export interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
}
export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    model: string;
    limit: number;
}
interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps<T> {
    options: OptionProps[];
    setFilter: (selected: T) => void;
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}
export interface SearchManuFacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
}