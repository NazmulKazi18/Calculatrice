import "./input.css";

const Input = ({text, resultat}) => {
   return (
    <div className="input-wrapper">
        <div className="resultat">
            <h1>{resultat}</h1>
        </div>

        <div className="text">
            <h3>{text}</h3>
        </div>
    </div>
   );
};

export default Input;