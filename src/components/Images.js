import React from 'react'
import styled from 'styled-components';


export default function Images({ data, selectedDelete, setSelectedDelete, selectAll, filter }) {

    
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
           transition : 0.3s ease
        }

        /* input {        
            visibility:hidden
        }
        &:hover { */
            input {
            position: absolute;
            border-radius: 9px;
            height: 22px;
            width: 23px;
            cursor: pointer;
            /* visibility:visible */
            }
            /* } */
    }
    
    
    img{
        margin: 5px;
        width: 260px;
        height: 180px;
        border-radius: 9px;
        
    }
    `
    const Discription = styled.span`
    display: flex;
    justify-content: space-between;
    p{
        font-size:12px;
    }
    `
    return (
        <>
            <Wrapper>
                {filter && filter.length > 1 ? filter.map((img) => {
                    return (
                        <div key={img.id}>
                            <input
                                type="checkbox"
                                id={img.id}
                                checked={(selectedDelete[img.id] && selectedDelete[img.id].isChecked) || selectAll}
                                onChange={(e) => { setSelectedDelete({ ...selectedDelete, [img.id]: { isChecked: e.target.checked } }) }} />
                            <a href={img.urls.full} download style={{ color: 'black', textDecoration: 'none', display: 'grid' }}>
                                <img src={img.urls.thumb} alt={img.alt_description} />
                                <Discription>
                                <span>{img.user.name}</span> 
                                <p>{img.created_at.substring(0,10)}</p>
                                </Discription>
                            </a>
                        </div>
                    )
                }) : data ? data.map((img) => {
                    return (
                        <div key={img.id}>
                            <input
                                type="checkbox"
                                id={img.id}
                                checked={(selectedDelete[img.id] && selectedDelete[img.id].isChecked) || selectAll}
                                onChange={(e) => { setSelectedDelete({ ...selectedDelete, [img.id]: { isChecked: e.target.checked } }) }} />
                            <a href={img.links.download} download style={{ color: 'black', textDecoration: 'none', display: 'grid' }}>
                                <img src={img.urls.thumb} alt={img.alt_description} />
                                <Discription>
                                <span>{img.user.name}</span> 
                                <p>{img.created_at.substring(0,10)}</p>
                                </Discription>
                            </a>
                        </div>
                    )
                }) : <p>loading...</p>}
            </Wrapper>
        </>
    )
}
