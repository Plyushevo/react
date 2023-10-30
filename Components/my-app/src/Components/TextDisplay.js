import React, {useState} from 'react'

function TextDisplay() {
    const [inputText, setInputText] = useState("")

    const handleChange = (event) => {
        setInputText(event.target.value)
    }

    const handleRemoveText = () => {
        setInputText('')
    }


return (
    <div>
    <input 
        type="text"
        value={inputText}
        onChange={handleChange}
        />
<p>Text displayed in real time</p>
<p>{inputText}</p>

        <button onClick={handleRemoveText}>Delete</button>
</div>
)
}

export default TextDisplay