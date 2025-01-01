type Props = {
    chart: {
        colors?: string[];
        categories: string[];
        series: {
            name?: string;
            data: number[];
        }[];
    };
};
export declare function ChartLine({ chart }: Props): import("react/jsx-runtime").JSX.Element;
export {};
