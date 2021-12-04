import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
position: relative;
div{
    padding: 10px;
    margin: auto;
    display: grid;
    &:hover{
       background-color: #DCDCDC;
       border-radius: 9px;
       
    }
}

input{
    position: absolute;
    border-radius: 9px;
    height: 22px;
    width: 23px;
    cursor: pointer;
}
img{
    margin: 5px;
    width: 260px;
    height: 180px;
    border-radius: 9px;
    
}
`
export default function Images({ data, selectedDelete, setSelectedDelete, selectAll}) {

    
    return (
        <>
            <Wrapper>
                {data ? data.map((img) => {

                    return (
                        <div key={img.id}>
                            <input
                                type="checkbox"
                                id={img.id}
                                checked={(selectedDelete[img.id] && selectedDelete[img.id].isChecked) || selectAll}
                                onChange={(e) => { setSelectedDelete({ ...selectedDelete, [img.id]: { isChecked: e.target.checked } }); }} />
                            <img src={img.urls.thumb} alt={img.alt_description} />
                            <span>{img.user.name}</span>
                        </div>
                    )
                }) : <p>loading...</p>}
            </Wrapper>
        </>
    )
}
