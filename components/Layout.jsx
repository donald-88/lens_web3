import BottomNav from './bottomNav'

const Layout = ({children}) => {
  return(
    <div>
      {children}
      <BottomNav/>
    </div>
  )
}

export default Layout
