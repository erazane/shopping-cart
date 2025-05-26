import React from 'react';

function Header(){
    return(
        <header style={{ padding: '1rem', background: '#282c34', color: '#fff', textAlign: 'center' }}>
            <nav style={{ display: 'block', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{ margin: 0 }}>Shopping Cart</h1>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
                    <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                    <li><a href="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart</a></li>
                    <li><a href="/profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</a></li>
                </ul>
            </nav>
            </header>
    );
}
export default Header;