import React, { useState } from 'react'
import './Upload.css'
import Button from 'react-bootstrap/Button';

import Details from './Details';

function Upload() {
    const [image, setImage] = useState("")
    const [selected, setSelected] = useState(false)

    const handleChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            setImage(reader.result);
        };
    }

    const handleShow = () => {
        image !== "" ? setSelected(true) : setSelected(false)

    }

    return (
        <>
            {
                !selected && (
                    <>
                        <div className='upload-section'>

                            <label htmlFor="file-upload" className="custom-file-upload">
                                Upload File
                            </label>
                            <input id="file-upload" type="file" onChange={handleChange} />
                            <div className="upload-pic-container">
                                {image && <img src={image} alt="Uploaded file" />}
                            </div>
                        </div>
                        <Button className='mt-5' onClick={handleShow}>OK</Button>
                    </>

                )
            }

            {
                selected && (
                    <Details image={image}></Details>
                )
            }
        </>
    )
}

export default Upload