// function Card(props){
//     return(
//         <div className="card" style={{border:"2px solid black", padding:"2px"}}>
//            <img src="https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q73840s.jpg?im=Resize,width=750" height="200px" width="200px"/>
//            <div style={{textAlign:"center"}}>
//              <h2>{props.cloth}</h2>
//              <h1>{props.offer}</h1>
//              <h2>Shop Now</h2>
//              <h2>Price: {props.price}</h2>
//            </div>
//         </div>
//     )
// }

// export default Card;


function Card(props){
    return(
        <div className="card" style={{border:"2px solid black", padding:"2px"}}>
           <img src="https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q73840s.jpg?im=Resize,width=750" height="200px" width="200px"/>
           <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Shop Now</h2>
            <h2>Price: {props.price}</h2>
            <h2>Discount: {props.discount}</h2>
           </div>
        </div>
    )
}

export default Card;
