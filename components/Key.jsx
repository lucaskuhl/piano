export default function Key(props) {

    let hyperNote = (
        <div data-note={props.hypeNote} className={props.hyperNoteClass} onClick={(e) => props.hyperNoteFunc(e)}>
            {props.hyperNoteName}
        </div>
    )

    return (
        <li data-note={props.note} className={props.noteClass} onClick={() => props.noteFunc()}>
            {props.hyperNote ? hyperNote : ""}
            {props.noteName}

        </li>

    )
}