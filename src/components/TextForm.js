import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCapitalize = () => {
        let words = text.split(' ');  
        var CapitalizedWords = [];  
        words.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });
        setText(CapitalizedWords.join(' '));
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const [text, setText] = useState('');
    // style={{'background':'#232329'}}
    return (
        <div className='container mt-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="card p-3 shadow border-0" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white' }}>
                <div className="card-body">
                    <div className="mb-3">
                        <h3 className="mb-2 float-start">Enter the Text You Want to Analyze</h3>
                        <p className="float-end">{0.008 * text.split(" ").length} Minutes to read</p>
                        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#14141A' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    </div>
                    <p className="float-end">{text.split(" ").length} words and {text.length} characters</p>
                    <button className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} me-2`} onClick={handleUpperCase}>UPPERCASE</button>
                    <button className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} me-2`} onClick={handleLowerCase}>lowercase</button>
                    <button className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} me-2`} onClick={handleCapitalize}>Capitalize</button>
                    <button className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} me-2`} onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
                    <button className="btn btn-sm btn-outline-danger me-2" onClick={handleClearClick}>
                        <i class="bi bi-x-lg"></i>
                        &nbsp;Clear Text</button>
                    <button className={`btn btn-sm btn-outline-${props.mode === 'light' ? 'dark' : 'light'} me-2`} onClick={handleCopy}>
                        <i class="bi bi-clipboard-check"></i>
                        &nbsp;Copy Text</button>
                </div>
            </div>
        </div>
    )
}
