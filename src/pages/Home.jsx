import React from 'react';
import { useRootState, useRootDispatch } from '../store';
import { increment, decrement } from '../actions/countAction';

import Layout from '../components/Layout';
import { Button, Icon, Input, Badge } from 'components'


const Home = () => {
    const state = useRootState();
    const dispatch = useRootDispatch();

    const handleIncrement = e => {
        e.preventDefault();
        dispatch(increment());
    }

    const handleDecrement = e => {
        e.preventDefault();
        dispatch(decrement());
    }
    return (
        <Layout>
            <Button>
                리액트
            </Button>
            <Icon
                icon="dream-market"
            />
            <Input
                placeholder="sss"
            />

            <Badge count="24">
                <Icon
                    icon="dream-market"
                />
            </Badge>
        </Layout>
    );
};

export default Home;