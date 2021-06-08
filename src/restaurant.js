import styled, { withTheme } from "styled-components";
import { useState } from 'react';
import data from './restaurantData.js';

const RestaurantName = styled.h1`

`

const MenuItem = styled.div`
    background-color: ${props => (props.backgroundColor % 2) ? data[props.selectedRestaurant]['secondaryColor'] : 'white'};
    color: ${props => data[props.selectedRestaurant]['tertiaryColor']};
`

const StyledCart = styled.div`

`

const Menu = styled.div`

`

const StyledDeleteButton = styled.button`
    background-color: ${props => props.checked ? 'red' : 'white'};
    border: 1px gray solid;
    border-radius: 5px;
`;

export function Restaurant(props)  {
    const [cart, setCart] = useState([]);
    console.log(props.selectedRestaurant);
    return(
        <div>
            <Title selectedRestaurant = {props.selectedRestaurant}/>
            <Cart cart = {cart} setCart = {setCart}/>
            <MenuItems selectedRestaurant = {props.selectedRestaurant} cart = {cart} setCart = {setCart}/>
        </div>
    );
}

function Title(props)    {
    return(
        <RestaurantName>{data[props.selectedRestaurant]['name']}</RestaurantName>
    );
}

function MenuItems(props)    {
    return(
        <Menu>
            {data[props.selectedRestaurant]['menu'].map((item, index) => <MenuItem selectedRestaurant = {props.selectedRestaurant} key = {item.price * Math.random()} backgroundColor = {index}>{item.name}{item.price}<button onClick = {() => addToCart(item, props.setCart, props.cart)}>Add To Cart</button></MenuItem>)}
        </Menu>
    );
}

function Cart(props)    {
    let total = 0;
    props.cart.map(item => total += item.price);
    return(
        props.cart && 
            <div>
                <StyledCart>
                    <h2>Cart</h2>
                    {props.cart.map((item, index) => <div key = {item.price * Math.random()}>{item.name}{item.price}<DeleteButton index = {index} total = {total} cart = {props.cart} setCart = {props.setCart}/></div>)}
                    <h3>Total:{total}</h3>
                </StyledCart>
            </div>
    );
}

function addToCart(item, setCart, cart)    {
    let newCart = [...cart, item];
    setCart(newCart);
    console.log(cart);
}

function DeleteButton(props)   {
    const [checked, setChecked] = useState(false);
    return(
        <StyledDeleteButton checked = {checked} onClick = {() => removeFromCart(props.index, props.setCart, props.cart, props.total, checked, setChecked)}>Delete</StyledDeleteButton>
    );
}

function removeFromCart(index, setCart, cart, total, checked, setChecked)    {
    if (!checked){
        setChecked(true);
        return;
    }
    else{
        total -= (cart[index]['price']);
        let newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        console.log(cart);
    }
}