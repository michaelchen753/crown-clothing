import React from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionContainerDiv,
    OptionContainerLink
} from './header.style';


const Header = ({ currentUser, hidden })=> {
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Crown className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionContainerLink to='/shop'>
                    SHOP
                </OptionContainerLink>
                <OptionContainerLink to='/contact'>
                    CONTACT
                </OptionContainerLink>
                {
                    currentUser?
                    <OptionContainerDiv onClick = {()=>{ auth.signOut()}}>SIGN OUT</OptionContainerDiv>
                    :
                    <OptionContainerLink to='/signin'>SIGN IN</OptionContainerLink>
                }
                <CartIcon />
            </OptionsContainer>
            { hidden?
                null
                : 
                <CartDropdown />                
                }
        </HeaderContainer>       
    )
}
const mapState = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
    })

export default connect(mapState)(Header);