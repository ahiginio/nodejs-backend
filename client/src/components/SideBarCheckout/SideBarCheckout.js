export default function SidebarAccount({cartProducts}) {
  return (

      <div className="order-products">
        {cartProducts.map((item) => (
          <div className='product' key={item._id}>
            <div className='product-photo'>
              <img src={item.product.photo} alt={item.product.title} />
            </div>
            <div className='product-info'>
              <h3>{item.product.title}</h3>
              <h4>{item.product.price}</h4>
              <p>{item.qty}</p>
            </div>
          </div>
        ))}
      </div>
    
  );
}
