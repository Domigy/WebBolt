import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Menu from "../Menu";
import { useAuth } from "../context/Contexts"; 
import { useCart } from "../context/CartContext";

interface Termek {
    id: number;
    name: string;
    imgUrl: string;
    model: string;
    type: string; 	
    vrmp: string;
    price: number; 	
}

export default function Kezdolap() {

    const { addToCart } = useCart();
    const [termekek, setTermekek] = useState<Termek[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {success} = useAuth();
    const [error, setError] = useState(null);
    const [errorServer, setErrorServer] = useState<string>("");
    
    useEffect(() => {
        fetch("http://localhost:3000/termekek")
            .then((response) => { 
                if (response.status === 404){
                    setErrorServer('A kért erőforrás nem található (404)!');
                    //throw new Error('A kért erőforrás nem található (404)!');
                }
                if (!response.ok) {
                    setErrorServer(`Server responded with status ${response.status}`);
                    //throw new Error(`Server responded with status ${response.status}`);
                }
                return response.json() 
            })
            .then((data) => {
                setTermekek(data);
                setLoading(false);
                console.log(data); 
            })
            .catch((error) => { 
                //console.log(error.message) 
                setError(error.message);
            })
    }, [])

    if(errorServer){
        return <p>{errorServer}</p>
    }
    if(loading) { 
        return <p>Loading...</p>
    }
    if(error){
        return <p>Hiba történt: {error}.</p>
    }

    return <>
        <Menu></Menu>
        <h1>Termekek</h1>
        <div className="row">
        {termekek.map((termek) =>(
            
  <div className="col-sm-3">

<div className="card" >
<img className="card-img-top" width={250} height={250}  src={termek.imgUrl} alt={termek.name}></img>
<div className="card-body">
  <h5 className="card-title">{termek.name}</h5>
  <p className="card-text">{termek.type}</p>
</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">{termek.vrmp}</li>
  <li className="list-group-item">{termek.type}</li>
  <li className="list-group-item"><h6>{termek.price} Ft</h6></li>
  
</ul>
{success && (
  <div className="card-body">
    <button
                  className="btn btn-primary"
                  onClick={() => addToCart(termek)}
                >
                  Kosárba
                </button>
  </div>
)}
</div>
</div>


        ))}
        </div>
        


        
    </>
}