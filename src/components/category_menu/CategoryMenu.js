import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="outlined" {...bindTrigger(popupState)}>
            Categorías
          </Button>
          <Menu {...bindMenu(popupState)}>
            <Link to="/tienda"><MenuItem onClick={popupState.close}>Todo</MenuItem></Link>
            <Link to="/category/Motherboards"><MenuItem onClick={popupState.close}>Motherboards</MenuItem></Link>
            <Link to="/category/Microprocesadores"><MenuItem onClick={popupState.close}>Procesadores</MenuItem></Link>
            <Link to="/category/Memorias"><MenuItem onClick={popupState.close}>Memorias</MenuItem></Link>
            <Link to="/category/Almacenamiento"><MenuItem onClick={popupState.close}>Almacenamiento</MenuItem></Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}