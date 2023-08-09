import { HeaderContainer } from './styles'
import headerLeft from '../../assets/headerLeft.svg'
import headerRight from '../../assets/headerRight.svg'
import logo from '../../assets/logoWithName.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLeft} alt="" />
      <img src={logo} alt="Luiz Tomé" />
      <img src={headerRight} alt="" />
    </HeaderContainer>
  )
}
