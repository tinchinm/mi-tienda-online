import * as React from "react";
import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//  Components
import "./CartList.css";
import { ItemContext } from "../../components/item_context/ItemContext";

const CartList = () => {
  
  const [cart, setCart, cantidad, setCantidad, totalCompra, setTotalCompra] = useContext(ItemContext);
  
  let precios = []
  for (const elemento of cart) {
    precios.push(elemento.totalPrice)
  }
  let suma = precios.reduce((ant, sig) => {
    return ant + sig;
  });
  setTotalCompra(suma)
  
  const Delete = (productID) => {
    let inCart = cart;

    let elemento = inCart.find(elemento => elemento.id === productID)

    setCantidad(cantidad - elemento.cant)

    inCart = inCart.filter((elemento) => elemento.id !== productID);

    setCart(inCart);
  };

  const VaciarCarrito = () => {
    setCart([]);
    setCantidad(0);
  };

    return (
      <div>
        <div className="tabla">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Cantidad&nbsp;(u)</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">$ {row.price}</TableCell>
                    <TableCell align="right">{row.cant}</TableCell>
                    <TableCell align="right">
                      $ {row.totalPrice}
                    </TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row">
                        <Button
                          variant="contained"
                          onClick={() => Delete(row.id)}
                        >
                          Eliminar
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                    <h2>Su compra total es de $ {totalCompra}</h2>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
        <div className="tabla">
          <Button className="button" variant="contained" onClick={VaciarCarrito}>Vaciar Carrito</Button>
          <Link to="/shop"><Button className="button" variant="contained">Finalizar Compra</Button></Link>
        </div>
      </div>
    );
  }

export default CartList;
