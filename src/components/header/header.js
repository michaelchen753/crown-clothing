import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Crown } from './crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import './header.scss';


const Header = ({ currentUser, hidden })=> {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Crown className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className='option' onClick = {()=>{ auth.signOut()}}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { hidden?
                null
                : 
                <CartDropdown />                
                }
        </div>       
    )
}
const mapStateToProps = ({user:{ currentUser }, cart:{ hidden }}) =>({
    currentUser,
    hidden
    })

export default connect(mapStateToProps)(Header);