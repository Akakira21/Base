import React from 'react';
import Input from '../../Components/Input/Input';
import { useState } from 'react';
import { useEffect } from 'react';

const About = () => {

    const [title, setTitle] = useState("")

    useEffect(() => {
        document.querySelector("h1").style.color = title
    }, [title])

    return (
        <div>
            <h1>Page About</h1>
            <Input 
                placeholder = "Modifier mon texte"
                value = {title}
                onChange = {setTitle}
                />
        </div>
    );
};

export default About;