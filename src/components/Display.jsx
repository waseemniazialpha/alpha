import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import {MdDeleteForever} from "react-icons/all.js"
import { removeUser } from '../store/slices/UserSlice';
const Display = () => {
  const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.users;
    });
    const deleteUser = (id)=>{
      dispatch(removeUser(id))
      console.log("hello" + id)
    }
  
  return <Wrapper>
    {
       data.map((user , id)=>{
        return <li key = {id}>
            {user}
        <button className='btn-delete' onClick={()=>deleteUser(id)}>
            <MdDeleteForever className = "delete-icon"></MdDeleteForever>
            </button>
            </li>
       })
    }
    </Wrapper>
}

const Wrapper = styled.section`
text-align:left;
width:100%;

  li{
    list-style-type: none !important;
    width:100%;
    display:flex;
justify-content:space-between;
margin-bottom:20px;
  }
.delete-icon{
    background:transparent;
    border:none;
}

`;
export default Display