import React from 'react'
import styled from 'styled-components'

const prop = (key, val) => (props) => props[key] ? props[key] : val

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${prop('columns', 12)}, 1fr);
  grid-gap: 5px;

  & > * {
    background: ${prop('color', 'orange')};
    width: 100%;
  }

  & > div {
    content: "";
    display: inline-block;
    padding-bottom: 100%
  }

`

export default Grid
  
