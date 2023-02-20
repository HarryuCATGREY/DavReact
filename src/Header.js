

const Header = ({name}) => {
  return (
    <h1>
      Hi, {name}, you look awesome when you study!
    </h1>
  )
}
Header.defaultProps = {
  name : "Default Name"
}
export default Header