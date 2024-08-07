import "./styles.css"

type Prop ={
    messageProp : string;
}

export default function SimpleMessage( {messageProp} : Prop  ){
    return<>
        <h1 className="rrc-simple-msg">
            {messageProp}
        </h1>
    </>;
}