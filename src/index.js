import React from "react";
import ReactDOM from "react-dom";
import { pizzaData } from "./data";
import "./style.css";

// Menu Function
function Menu() {
    const isOpen = () => {
        const currentHour = new Date().getHours();
        return currentHour >= 10 && currentHour < 22; // Check if hour is between 10 AM and 10 PM
    };

    return (
        <div>
            <h1>ANDERTON's PIZZA</h1>
            <h2>Our Menu</h2>
            <div>
                {isOpen() ? <h3>Authentic Italian cuisine, all from a stone oven</h3> : null}
            </div>
            <div className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza
                        key={pizza.name}
                        name={pizza.name}
                        description={pizza.ingredients}
                        price={pizza.price}
                        image={pizza.photoName}
                    />
                ))}
            </div>
            <Footer isOpen={isOpen} />
        </div>
    );
}

// Pizza Function
function Pizza({ name, description, price, image }) {
    return (
        <div className="pizza">
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>${price}</span>
            </div>
        </div>
    );
}

// Order Component
function Order({ isOpen }) {
    return (
        <footer className="footer">
            {isOpen() ? "We're currently open" : "Sorry, we're closed"}
            <br/>
            {isOpen() ? <button className="btn">Order Now</button> : null}
        </footer>
    );
}

// Footer Component
function Footer({ isOpen }) {
    return (
        <Order isOpen={isOpen} />
    );
}

// App Function
function App() {
    return (
        <div>
            <Menu />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
