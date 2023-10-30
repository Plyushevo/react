import React, {useState} from 'react'

function CardViewer(){
    const [inputText, setInputText] = useState('')

    const handleChange = (event) => {
        setInputText(event.target.value)
    }

    return (
        <div>
        <input 
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder='Write your name here'
            />
        <input 
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder='Write your name here'
            />
        <input 
            type="email"
            value={inputText}
            onChange={handleChange}
            placeholder='Write your name here'
            />
        
    <p>Text displayed in real time</p>
    <p>{inputText}</p>
    
            <button onClick={handleRemoveText}>Delete</button>
    </div>
    )

}