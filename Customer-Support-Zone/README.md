1. What is JSX, and why is it used? 
   Ans: JSX (JavaScript XML) হলো এমন একটি .jsx  এক্সটেনশন যুক্ত ফা্ইল 
   যা JavaScript এর ভিতরে HTML-এর মতো কোড লিখতে দেয়। 
   এটি React-এ UI কোড সহজে লেখা ও বোঝার জন্য ব্যবহার করা হয়।
   
2. What is the difference between State and Props?
   Ans: Props: Parent component থেকে child component-এ data পাঠানোর জন্য 
   ব্যবহার হয়। এটি পরিবর্তন করা যায় না।
   State: Component এর ভিতরে থাকা data। এটি পরিবর্তন করা যায়।
   Example: Props
      const fetchCards = async () => {
      const res = await fetch("/Card.json")
      return res.json()
      }
      const cardPromise = fetchCards()
      <AvailableCards
          cardPromise={cardPromise} >
        </AvailableCards>
    Example: State
     import React, { use } from 'react';
     import { useState } from 'react';

     const CustomerCard = ({ card,}) => {
     const [isSelected, setisSelected] = useState(false);
     const [clicked, setClicked] = useState(false);
     const handleClick = () => {
        if (clicked) return; // prevent second click
        handdleSelected(card);
        setClicked(true);
    };

    return (
        <div onClick={handleClick}
            className={`card w-96 bg-base-100 card-sm shadow-sm  
            ${clicked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`} >
            
        </div>

    );
};

3. What is the useState hook, and how does it work? 
   Ans: useState হলো React Hook যা functional component-এ state 
   সংরক্ষণ ও পরিবর্তন করার জন্য ব্যবহার হয়।
   Example:
   const [inProgress, setinProgress] = useState(0);
   inProgress = current state value এর জন্য
   setinProgress = function to update the state এর জন্য
   
 4. How can you share state between components in React? 
    Ans: React-এ state শেয়ার করতে হলে state কে parent component-এ 
    নিয়ে যেতে হয় (lifting state up) এবং props এর মাধ্যমে child 
    component-এ পাঠাতে হয়।
    Example:
    
    using my code structure 
    (App → AvailableCards → CustomerCard / SelectedCard).

    In my project, the state is stored in App.jsx and then passed to 
    child components using props. This is called Lifting State Up.
    In my project:
    App.jsx → stores state
    CustomerCard → updates state
    SelectedCard → reads state
    
 5. How is event handling done in React?
    Ans: React-এ event handling করা হয় camelCase event ব্যবহার করে এবং 
    একটি function দেওয়ার মাধ্যমে।
    Example: event:
    <div onClick={handleClick}
            className={`card w-96 bg-base-100 card-sm shadow-sm 
             ${clicked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`} >
      Function:
      const handleClick = () => {
        if (clicked) return; // prevent second click

        handdleSelected(card);
        setClicked(true);
    };