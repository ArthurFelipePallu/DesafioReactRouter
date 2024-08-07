import "./styles.css"

type Prop ={
    listProp : string;
}
export default function SimpleList( { listProp } : Prop){

    return <>
        <ul className="rrc-simple-list">
          <li> { listProp } 1</li>
          <li> { listProp } 2</li>
          <li> { listProp } 3</li>
        </ul>
    </>;
}