import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllUsers } from "../store/actions";
import styled from "styled-components";
import { useState } from "react";
const DeleteAllUsers = () => {

  const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(deleteAllUsers());
  }
  return <Wrapper>
    <button className="btn-del" onClick={deleteUsers}>Delete ALL Users</button>
  </Wrapper>;




};
const Wrapper = styled.section`

.btn-del{
  margin-top:4rem;
  padding:15px 30px;
  border:none;
  text-transform:uppercase;
  border-radius:5px;
  background-color:#db338a;
  color:white;
}
`
export default DeleteAllUsers;
