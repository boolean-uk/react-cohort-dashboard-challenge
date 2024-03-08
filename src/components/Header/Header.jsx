import logo from '../../assets/logo.svg'
export default function Header(){
    return (
        <div className='header-container'>
          <img className='header-logo' style={{width: '255px'}} src={logo}></img>
          <div className='header-profile'>
            <p className='font-paragraph'>AW</p>
          </div>
        </div>
    )
}