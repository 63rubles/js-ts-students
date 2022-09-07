import React from 'react';

export type Test6Props = {
    name: string
    age: number
    lessons: Array<{ title: string; name?: string }>
    address: {street: {title: string}}
}

type PropsType = {
    title: string
    man: Test6Props
    food: Array<string>
    car: {model: string}
}

export const Destructuring: React.FC<PropsType> = ( {title, man, ...props} ) => {

    // const {title, man: {name}} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>

            <div>{}</div>
        </div>
    );
};