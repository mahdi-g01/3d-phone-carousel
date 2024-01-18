import React from 'react';
import '../scss/Slider.scss';
export declare type SlideInfo = {
    image: string;
    title: string;
    description: string;
};
export declare function fillArrayWithOriginalItems(originalArray: any[]): any[];
export declare function Slide(props: {
    startOffset: number;
    moveOffset: number;
    items: SlideInfo[];
    initialItem: SlideInfo;
    onItemShowed: (item: SlideInfo) => void;
}): React.JSX.Element;
export declare function getNextItem(array: any[], slidesCount: number, mo: number): any;
export declare function getPreviousItem(array: any[], mo: number): any;
