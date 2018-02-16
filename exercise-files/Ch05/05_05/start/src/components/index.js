import MainMenu from './ui/MainMenu'

// create page template
// pass children variable so left component will render children dynamically
export const Left = ({children}) =>
	<div className="page">
		<MainMenu className="main-menu"/>
		{children}
	</div>

// right side nav
export const Right = ({children}) =>
	<div className="page">
		{children}
		<MainMenu className="main-menu"/>
	</div>


export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>
