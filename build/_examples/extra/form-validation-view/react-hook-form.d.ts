export declare const defaultValues: {
    age: number;
    email: string;
    fullName: string;
    phoneNumber: string;
    editor: string;
    autocomplete: undefined;
    password: string;
    confirmPassword: string;
    startDate: string;
    endDate: null;
    singleUpload: string;
    multiUpload: never[];
    singleSelect: string;
    multiSelect: never[];
    singleCountry: string;
    multiCountry: never[];
    rating: number;
    radioGroup: string;
    switch: boolean;
    multiSwitch: never[];
    checkbox: boolean;
    multiCheckbox: never[];
    slider: number;
    sliderRange: number[];
};
type Props = {
    debug: boolean;
};
export declare function ReactHookForm({ debug }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
