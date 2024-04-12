

export function Tag({...props}){
    return(
        <>
            <a className="tagLink" href={props.link}>{props.label}</a>
        </>
    );
}