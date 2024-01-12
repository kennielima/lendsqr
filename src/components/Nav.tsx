import './Nav.scss'
import Image from 'next/image';

const Header = () => {
	return (
		<header className="header">
			<Image src="logo.svg" alt="" className="logo" height={50} width={50} />
			<div className="search">
				<input type="search" placeholder="Search for anything" />
				<button className=''>
					<Image src="/search.png" alt="" height={50} width={50} />
				</button>
			</div>
		</header>
	);
};

export default Header;









// interface Props {
// 	setIsMenuOpen: (value: boolean) => void;
// 	isMenuOpen: boolean;
// }

// : FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {

{/* <div className="search-input">
						<input type="search" placeholder="Search for anything" />
						<button>
							<Image src="/search.png" alt="" height={50} width={50} />
						</button>
					</div>

					<div className="top-nav-right">
						<p>Docs</p>
						<Image src="/Vector.png" alt="" />
						<div className="top-nav-profile">
							<img src="/images/avatar.svg" alt="avatar" />
							<p>Adedeji</p>
							<img src="/images/icons/dropdown-icon.svg" alt="Avatar" />
						</div>
					</div>
					<div onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-icon">
							<img src={`/images/icons/${isMenuOpen ? "close-icon" : "menu"}.svg`} alt="menu icon" />
						
					</div> */}
			{/* </div> */}


			        {/* setIsMenuOpen={function (value: boolean): void {
              throw new Error('Function not implemented.')
          } } isMenuOpen={false} */}