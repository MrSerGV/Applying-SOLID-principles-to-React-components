import React from 'react';

type BasicButtonProps = {
    className: string
    onClick: () => void
    text: string
    color: string
}

const BasicButton = ({ className, onClick, text, color }: BasicButtonProps) => {
    return <button 
                className={className}
                onClick={onClick}
                color={color}
            >
                {text}
            </button>;
};

type GreenSuccsesButtonProps = {
    onClick: () => void
    text: string
    isPrimary: boolean
}

const GreenSuccsesButton = ({ onClick, text, isPrimary }: GreenSuccsesButtonProps) => {
    return  <button 
                className={ isPrimary ? 'primary' : 'secondary' } 
                color='green'
                onClick={onClick}
            >   
                {text}
            </button>            
};

export const ImplementationWithPrinciple = () => {
    return (
        <GreenSuccsesButton 
            onClick={() => console.log('Button clicked')} 
            text='Click me' 
            isPrimary={true}
        />
    );
};