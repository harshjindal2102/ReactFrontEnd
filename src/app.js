// import Dog from "./dog";

const Dog = (props) => {
    return React.createElement("div",{},[

        React.createElement('h3',{},props.name),
        React.createElement('h3',{},props.weight ),
        React.createElement('h3',{},props.breed),
    ])
}

const App = () => {
    var arr = [1,2,3,4];

    return React.createElement(
        "div", //Tag
        {id:'website-title'}, //Attributes with the tag eg id or class
        [
            React.createElement(
            "h1",
            {},
            "Dog Website"
            ),

            arr.map(item => React.createElement("h1", {}, item)),
            React.createElement(Dog,{
                name : "Bull Terrier",
                weight: "50.70kg",
                breed : "Terrier"
            }),
            React.createElement(Dog,{
                name : "Pitbull",
                weight: "50.70kg",
                breed : "Husky"
            }),
            React.createElement(Dog,{
                name : "BullDog",
                weight: "60.70kg",
                breed : "Bull"
            }),
            React.createElement(Dog),

     ] //Content Can be another component also
    );
 };

 ReactDOM.render(
     React.createElement(
         App,
         ),document.getElementById('root')
 );