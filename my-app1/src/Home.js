import "./App.css";
import { useState, useEffect } from "react"
import Card from "./Card.js"
import CardService from "./CardService.js"
export default function Home() {


    return (
        <div className="ContainerH">
            <div className="Home">
                <Card />
            </div>
            <div>
                <div style={{ textAlign: "center" }}><h1>Services</h1></div>
                <CardService />
            </div>
        </div >
    )

}