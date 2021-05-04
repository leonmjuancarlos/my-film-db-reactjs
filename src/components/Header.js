import GroupWorkIcon from '@material-ui/icons/GroupWork';


export function Header(props) {

    return (
        <div className="header">
            <GroupWorkIcon
                style={{ fontSize: "7rem", color: "#ffc20e" }}/>
            <h1>MyFilmDb</h1>
        </div>
    )
}