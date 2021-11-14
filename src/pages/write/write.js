import React, { useState } from 'react';
import TextInput from '../../components/textInput/TextInput'
import './write.css'


function Write() {

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div class="write-container">
            <div style={{height: '60px', display: 'flex', flexDirection: 'row', borderWidth: '1px', boxShadow: '0px 0px 3px', justifyContent: 'space-between'}}>
                <div>
                    <button>
                        Back Button
                    </button>
                    <p>Untitled Story</p>
                </div>
                <div>
                    <button>
                        Cancel
                    </button>
                    <button>
                        Skip
                    </button>
                </div>
            </div>
            <div style={{display: 'flex', padding: '20px', justifyContent: 'center'}}>
                <div style={{margin: '10px'}}>
                    <div style={{height: '500px', width: '300px', background: '#787878'}}>

                    </div>
                </div>
                <div style={{margin: '10px',  borderWidth:'1px', boxShadow: '0px 0px 3px'}}>
                    <div>
                        Story Details
                    </div>
                    <form>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <TextInput />
                            <label>Name:</label>
                            <input type="text" name="name" />
                            <label>Description:</label>
                            <textarea type="text" name="description" />
                            <label>Main Character:</label>
                            <input type="text" name="mainChar" />
                            <label>Category:</label>
                            <input type="text" name="mainChar" />
                            <label>Tags:</label>
                            <input type="text" name="mainChar" />
                            <label>Target Audience:</label>
                            <input type="text" name="mainChar" />
                            <label>Languange</label>
                            <input type="text" name="mainChar" />
                            <label> Rating</label>
                            <input type="text" name="mainChar" />
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Write
