import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartProvider';
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const CartWidget = () => {
    const { getTotalProducts } = useContext(CartContext); // Obtén la función del contexto

    return (
        <Link to={"/cart"}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={getTotalProducts()} color="secondary" showZero>
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Link>
    );
};