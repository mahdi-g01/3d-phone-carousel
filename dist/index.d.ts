import * as React from 'react';
import PropTypes from 'prop-types';
declare function PhoneSlider(props: any): React.JSX.Element;
declare namespace PhoneSlider {
    var propTypes: {
        style: PropTypes.Requireable<any>;
        items: PropTypes.Validator<(PropTypes.InferProps<{
            image: PropTypes.Requireable<string>;
            title: PropTypes.Requireable<string>;
            description: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        delay: PropTypes.Requireable<number>;
        forwardButtonRef: PropTypes.Requireable<any>;
        backwardButtonRef: PropTypes.Requireable<any>;
        outerMove: PropTypes.Requireable<number>;
    };
}
export { PhoneSlider };
export declare type SlideInfo = {
    image: string;
    title: string;
    description: string;
};
