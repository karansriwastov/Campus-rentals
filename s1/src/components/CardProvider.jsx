import { collection,doc, getDocs } from 'firebase/firestore'
import React, { useContext } from 'react'
import { itemsDb } from './Firebase'
import AuthProvider, { Store } from '../store/AuthProvider'
export default function CardProvider({item}) {
  const {cartItemProvider,AddItemsToCart}=useContext(Store)
  return(
    <>
    <div class="card my-3" style={{width: "18rem"}}>
  <div class="card-body">
   <img width="150" height="150" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmwMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQQFAgMGB//EADYQAAICAQEEBggFBQEAAAAAAAABAgMEEQUSITFBUWFykeETFCIyNDVTcSMzQqHRUlSCksGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP7iCIoAAAAAAAIBQQoEAAApAAAAFBAAAAFAAAAAAAAAAAAAAAAAI2km2+CAoPjjZNeQpuptqL3dWj7AAAAAAAAACFAEB8syThiWyi2motproMWPj5V1Fdnr1kd6Oum75gdIHMtqsqaVm1HFvkmvM9wxcicVKG0ZST5NR8wOgDAsTIbaW0J6rmt3zL6llf38/wDTzA3Aw+pZX9/P/TzI8PJS1e0J6d3zA3NpJt8Euk5s7J7SsdVLccaL9ua/V2I+dauzPwIXTlRF/iWy/X2I0vCuXCrKlVBcIwjDgl4gbKqoVVquuKjGK0SR6MGz5WrKyKrbZWbmmjZvAAAAAAKCFAAADPn/AAV/cZMH4GjuIuf8Fd3GNn/A0dxAfnLZSnbKU23Nt66m/ZGR6GN7m36KMVL/ANNuTsum6xzTlBvnu9Jztoejx0sSjXRcZt82wJi5soZrutfCx6T+3kfoE9T8muR3Nk5XpKHCb9qtdL/SB0G9E2+CRzLJy2la6qm440ffmv1diLZOzaNjqqbjjRftz/q7EdCuuFcFCEVGK5JAKqoVQUK4pRXJHsADn4nzHM+6Ogc/E+Y5n3R0AAAAAACFIigAAB8M/wCDu7jJs/4GjuIuf8Hd3Gedn/A0dxAeszIWPROx81wS62fmZTcpOUnq29WzdtbJ9Nkbkfcren3fSY665WSUK1rJgSuErZqMFq3+3aa4qCrlGMmqE/xLVzm+pCMYRrlGMtKF+ZYudj6l2Ge630slot2EVpGC5ID9JjxrjTD0KSr09nQ+G0cv1Wn2fzJe6v8Api2XmxqqnVdLhBb0f4MGTfLJuds9ePJdSA7+FkxyaVNe8uEl1M0H5vByXi3qXHdfvLrR+jhJTipResWuDAw4nzHM+8TeYMT5jmfeJvAAAAAAKQACggA+Gf8ABX9xmSeT6vsmnd135wSj/JuyYO3HsrjonKOi1MMKdoU1qKtoUILTigOPCqds92EXq+nqNUYRVbjCTVK/MtS42PqXYak7s9+iUvwY+/ZppvvqXYfaNOfWt2mWPCte7FLXT9gOPdbK1rSG7CK0jFdB40fU/A7m5tP6tPgNzaf1KfDyA4ej6n4DR9T8Dubm0/q0+A3Np/Vp8AOHo+p+B09j5bjL1ezXdfGDfR2Gnc2n9WnwG5tP6lHgAw/mOZ/idAw4WPfVdbbkSg5Wae6bgABAKAAAIAAAAN6LV8jmTnPaVjrpbjjRftz/AKuxHT0JCEa4qMIqMVySAlVcaoKEElFLRI9HmyyNcXKbSiubY31vKOvFrVAegCQkpxUo8ny4AUAAAAABQBAAABQAAAAEAFBAB8sqDnVupa+1HVdmqM1lN0ZOME3BQe40+K1a4fsbigZ6IyUp6KUa+G6pPxM6pt9Gt5S3lCtcJcddeP7G8AYbarFGUIQk470nF6t6cFp09ep5Tk7vab4SST16d1cOfLXsOgTcjva7q169AM2JCyL1nvp7uktVw16+01kAFBCgACAUEAAoAEBSAAABQQAAAAAAAAoEKQAACgQAAUAAAAAAAAAAAAAAAAgAFAAAhQAAAH//2Q==" class="card-img-top" alt="..."/>
    <h5 class="card-title text-center">{item.itemName}</h5>
    <ul class="" style={{minWidth:""}}>
  <li class="list-group-item">{item.description}</li>
  <li class="list-group-item">item price:-{item.price}</li>
</ul>
<div>
    <a href="#" class="btn btn-primary  mx-2">{item.type}</a>
    <button class="btn btn-primary  mx-2" onClick={()=>{
    cartItemProvider(item)
    AddItemsToCart(item)
    }}>Add to Cart</button>
    </div>
</div>
  </div>
    </>
  )
}