import styled from "styled-components";
import { useState } from 'react';
import data from './restaurantData.js';

const StyledButton = styled.button`
    background-color: green;
    border: 1px gray solid;
    border-radius: 5px;
`;

const StyledOption = styled.span`
    border: 1px gray solid;
    border-radius: 5px;
    :hover{
        cursor: pointer;
    }
`;

export function Dropdown(props) {
    const [showList, setShowList] = useState(false);
    return(
        <div>
            <StyledButton onClick = {() => setShowList(true)}>Choose A Restaurant</StyledButton>
            {showList && <DropdownList showList = {showList} setShowList = {setShowList} selectedRestaurant = {props.selectedRestaurant} setSelectedRestaurant = {props.setSelectedRestaurant}/>}
        </div>
        
    );
}

function DropdownList(props) {
    return(
        <div>
            {data.map((restaurant, index) => <StyledOption key = {restaurant.name} onClick = {() => {props.setSelectedRestaurant(index); props.setShowList(false); console.log(props.selectedRestaurant)}}>{restaurant.name}</StyledOption>)}
        </div>
    );
}