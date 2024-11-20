/* eslint-disable jsx-a11y/img-redundant-alt */


export default function BlockImage({Children, parag}){
    return(
        <div className="img">
            <div className="abdo">{Children}</div>
            <p>{parag}</p>
        </div>
    );
}