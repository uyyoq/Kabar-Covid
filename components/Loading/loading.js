import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin: 20px;
padding-bottom: 35px;
text-align:center;
`
const Loader = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(187, 176, 176, 0.3);
  border-radius: 50%;
  border-top-color: rgb(36, 33, 33);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
`
const Loading = () => {
  return (
    <div className="m-8 text-center pb-10 md:pb-0">
      <Loader />
    </div>
  )
}

export default Loading
