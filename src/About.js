import React, { Fragment } from "react";
import img1 from './gallery/img3.jpg';
import Abc from './Mycontact';
import Page1 from "./Page1";
import Page2 from "./Page2";
const a = "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg";
const b=500;
const c = prompt("enter color");
function Myabout()
{
    return "this is return result";  
}

export default Myabout



export function Myabout1()
{
    return <h1>lsdjfkljsdklfjksdjf </h1>;
}

export function Myabout2()
{
    return(
        <Fragment>
            <h1>heading one</h1>
            <p>this is paragraph</p>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>
                    <img src={img1} alt="myimage" />
                </li>
                <li>
                    <img src="photo/img4.jpg" alt="myimg1"/>
                </li>
                <li>
                    <img src={a} alt="myimg3" width={b} />
                </li>
                <li>{50+80}</li>
                <li>{<h1>computer</h1>}</li>
                <li>{<Abc/>}</li>
                <li style={{color:'red',backgroundColor:`${c}`}}>this is inline css</li>
                <li style={{color:'red','background-color':`${c}`}}>this is inline css</li>
            </ul>
        </Fragment>
    )
}

const mycon=20;

export function Myconditional()
{
    if(mycon>10)
    {
        return <Page1/>
    }
    else
    {
        return <Page2/>
    }
}




