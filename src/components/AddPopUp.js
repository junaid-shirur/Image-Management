import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { uploadImage } from '../features/ImageSlice';
import { useDispatch } from 'react-redux';


const ImageHeader = styled.div`
h3{
    color: #DCDCDC;
}
span{
        color: #DCDCDC;
        font-size: 13px;
    }

`
const ImageWrap = styled.div`
border: 2px grey dotted;
border-radius: 9px;
display: block;
img{
    width: 100%;
    height: 380px;
    border-radius: 9px;
    padding: 10px;
    border-radius: 15px;
}
.queries{
    display: flex;
    justify-content: space-around;
    div{
       
        input{
            width: 100%;
            border: 1px grey solid;
            border-radius: 3px;
        }
        p{
            font-weight: bold;
        }
        span{
            color: grey;
        }
    }
}

`

export default function AddPopUp(props) {
    const [image, setImage] = useState()
    
    useEffect(() => {
        const image = props.data.filter((img) => img.id === props.id)
        setImage(image[0])
    }, [])

    const dispatch = useDispatch()
    const handleSave = (e) => {
        e.preventDefault()
        dispatch(uploadImage(image))
        props.onHide()
        alert("image upload successfull")
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <ImageHeader>
                    <h3>Add Image</h3>
                    <span>Edit your media files here</span>
                </ImageHeader>
            </Modal.Header>
            <Modal.Body>
                {image && <ImageWrap>
                    <img src={image.urls.thumb} alt={image.alt_description} />
                    <div className="queries">
                        <div>
                            <span>Title</span> <br />
                            <input type="text" defaultValue={image.user.name} />
                        </div>
                        <div>
                            <span>Type</span>
                            <p>JPG</p>
                        </div>
                        <div>
                            <span>Size</span>
                            <p>400kb</p>
                        </div>
                        <div>
                            <span>Dimension</span>
                            <p>{image.width + " x " + image.height}</p>
                        </div>
                    </div>
                </ImageWrap>}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSave}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}
