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
export interface customFilterProps {
    title: string;
    options: OptionProps[]
}
export interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
}