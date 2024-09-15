import "./Button.css";

const Button = ({symbole, color, handleClick}) => {
    return (
        <div 
            onClick={() => handleClick(symbole)}
            className="button-wrapper" 
            style={ {backgroundColor: color}}
        >
            {symbole}
        </div>
    );
};

export default Button;