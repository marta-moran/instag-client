import React, { useState } from 'react'
import './Upload.css'
import Button from 'react-bootstrap/Button';
import postService from '../../services/post.service';

import Details from './Details';

function Upload() {
    const [image, setImage] = useState("")
    const [selected, setSelected] = useState(false)

    const handleChange = (e) => {
        const file = e.target.files[0];
        const formData = new FormData()
        formData.append('imageUrl', file)

        postService.uploadPhoto(formData)
            .then(url => setImage(url))
    }

    const handleShow = () => {
        image !== "" ? setSelected(true) : setSelected(false)

    }

    return (
        <>
            {
                !selected && (
                    <>
                        <div className='upload-section mt-5'>

                            <label htmlFor="file-upload" className="custom-file-upload">
                                Upload File
                            </label>
                            <input id="file-upload" type="file" onChange={handleChange} />
                            <div className="upload-pic-container">
                                {image && <img src={image} alt="Uploaded file" />}
                            </div>
                        </div>
                        <Button className='mt-5 mb-3' onClick={handleShow}>OK</Button>
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