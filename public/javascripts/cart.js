import { SERVER_PORT } from "../../src/config/params.js";

function deleteProductInCart(id){ 
    fetch(`http://localhost:${SERVER_PORT}/api/cart/${id}`, {
        method: 'DELETE',
        // body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      Swal.fire({
        icon: 'success',
        title: 'Product deleted'
      })

      location.reload();
return false;
}

//Function to each product
const deleteBtnProductCart = document.querySelectorAll(".deleteProductBtn"); 
deleteBtnProductCart.forEach(btn=> { 
    btn.addEventListener("click", (e)=> { 
        deleteProductInCart(e.target.id)
    })
    
})

