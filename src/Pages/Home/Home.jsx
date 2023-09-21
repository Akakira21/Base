import { useState } from "react"
import styles from "./Home.module.scss"
import { useRef } from "react";

function Home(){
    
    const [Exo1, setExo1] = useState(0);

    function increment (){
        setExo1((curr1) => curr1 + 1)
    }
    function decrement (){
        setExo1((curr1) => curr1 - 1)
    }

    const NewText = useRef(null)

    const [Exo2, setExo2] = useState("")

    function textUpdate () {
        const inputValue = NewText.current.value;
        setExo2(inputValue);
    }

    const NewToDo = useRef(null)

    const [Exo3, setExo3] = useState([]);

    function UpdateToDo (){
        const inputValue = NewToDo.current.value;
        setExo3((curr3) => [...curr3, inputValue]);
    }

    const [Exo4, setExo4] = useState('Connexion');

    function Connexion (){
        if (Exo4 == "Connexion") {
            setExo4("Déconnexion")
        } else {
            setExo4("Connexion")
        }
    }


    return (
        <>
            <h1 className={styles.titre}>Page Home</h1>

            <h2>Exercice 1 </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decremente</button>
            <p>{Exo1}</p>

            <h2>Exercice 2</h2>
            <input ref={NewText} type="text" onChange={textUpdate}/>
            <h3>Texte : {Exo2}</h3>

            <h2>Exercice 3</h2>
            <input ref={NewToDo} type="text" />
            <button onClick={UpdateToDo}>Add to list</button>
            <ul>
                {Exo3.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h2>Exercice 4</h2>
                <button onClick={Connexion}>{Exo4}</button>
        </>
    )
}

export default Home