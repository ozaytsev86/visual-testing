import * as React from 'react';
import './loading.css';

export const Loading = ({
                            testId = 'component',
                            overlay = false,
                            className = '',
                            size = 'sm',
                            visible,
                        }) => {

    let getClasses = () => {
        let classes = 'c-loading';

        if(overlay) classes+=' c-loading--overlay';
        return classes;
    };


    return visible ? (
        <div data-testid={`${testId}-loading`} className={`${getClasses()} ${className}`}>
            <span className={'c-loading-spinner c-loading-spinner--' + size} />
        </div>
    ) : null;
};
