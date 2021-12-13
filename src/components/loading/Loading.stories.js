import * as React from 'react';
import {Loading} from './Loading';

export default {
    title: 'Components/Loading',
    component: Loading,
};

export const Default = () => <Loading visible />;
export const Xs = () => <Loading visible size="xs" />;
export const Lg = () => <Loading visible  size="lg" />;
export const WithOverlay = () => (
    <div>
        Content
        <Loading size="lg" visible overlay />
    </div>
);