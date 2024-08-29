export default function slide(props) {
    return (
        <div className="rounded overflow-hidden shadow-md shadow-black-50">
            {props.children}
        </div>
    )
}