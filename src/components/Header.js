import GroupWorkIcon from '@material-ui/icons/GroupWork'

export function Header(/* props */) {
  return (
    <div className="header">
      <GroupWorkIcon
        style={{
          fontSize: '5.6rem',
          color: 'var(--c4)',
        }}
      />
      <h1>MyFilmDb</h1>
    </div>
  )
}
