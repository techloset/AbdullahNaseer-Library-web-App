import React from 'react';
import Card from './Card';

const CardGrid = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default CardGrid;
