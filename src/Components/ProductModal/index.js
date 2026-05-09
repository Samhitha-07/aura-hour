import React from "react";
import { Dialog,Button } from "@mui/material";
import { MdClose } from "react-icons/md";
import "./ProductModal.css";
const ProductModal = (props) => {

  return (
    <>
      <Dialog open={true} className="productModal" onClose={()=> props.closeProductModal()}>
        <Button className='close_' onClick={()=> props.closeProductModal()}><MdClose/></Button>
        <h4 className="mb-0">SAINT HONORÉ</h4>
      </Dialog>
    </>
  );
};

export default ProductModal;
