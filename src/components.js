import styled from "styled-components";
import { useState } from 'react';
import data from './restaurantData.js';
import {Dropdown} from './dropdown.js';
import  {Restaurant} from './restaurant';

const StyledContainer = styled.div`
    height: 10000px;
    margin-left: 50px;
    background-color: ${props => (props.sr + 1) ? data[props.sr]['primaryColor'] : 'white'};
`;


export function AppBody()   {
    const [selectedRestaurant, setSelectedRestaurant] = useState();
    return(
        <StyledContainer sr = {selectedRestaurant}>
            <Dropdown selectedRestaurant = {selectedRestaurant} setSelectedRestaurant = {setSelectedRestaurant}/>
            {(selectedRestaurant >= 0) && <Restaurant selectedRestaurant = {selectedRestaurant}/>}
        </StyledContainer>
    );
}

