import React, { useContext, useState } from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
// import { Button } from '@mui/material';
// import MapIcon from '@mui/icons-material/Map';        
// import EditIcon from '@mui/icons-material/Edit';        
// import DeleteIcon from '@mui/icons-material/Delete';    
import Map from '../../shared/components/UIElements/Map';
import CustomModal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/FormElements/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/Context/AuthContext';

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Handlers for opening and closing the map modal
  const openMapHandler = () => {
    // console.log("Opening map modal");
    setShowMap(true);
  };

  const closeMapHandler = () => {
    // console.log("Closing map modal");
    setShowMap(false);
  };

  const showDeleteWarningHandler = () =>{
    setShowDeleteModal(true);
  }
  const cancelDeleteHandler = () =>{
    setShowDeleteModal(false);
  }
  const confirmDeleteHandler = () =>{
    setShowDeleteModal(false);
    console.log('Deleting...')
  }
 


  // Debug the showMap state to verify it changes correctly
  // console.log('showMap state before passing to CustomModal:', showMap);

  return (
    <React.Fragment>
      {/* Passing open prop to CustomModal */}
      <CustomModal
        open={showMap}
        onClose={closeMapHandler}
        header={props.address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-action'
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className='map-container'>
          <Map center={props.coordinates} zoom={16}/>
        </div>
      </CustomModal>

      <CustomModal
        open={showDeleteModal}
        onClose={cancelDeleteHandler}
        header='Are you sure?'
        footerClass='place-item__modal-action'
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
          </React.Fragment>
      }
      >
        <p>
          Do you want to proceed and delete tis place? Please note it 
          can't be undone thereafter. 
        </p>
      </CustomModal>
    
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            {/* <Button variant="outlined" startIcon={<MapIcon />} onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`} variant="text" startIcon={<EditIcon />}>
              EDIT
            </Button>
             
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
              DELETE
            </Button> */}
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            {/* <Button to={`/places/${props.id}`}>EDIT</Button> */}
            {auth.isLoggedIn && 
             <Link  to={`/places/${props.id}`}>
             <Button>EDIT</Button>
           </Link>}
           {auth.isLoggedIn &&  
            <Button danger type="button" onClick={showDeleteWarningHandler}>DELETE</Button>
           }
          </div>
        </Card>
      </li>
    </React.Fragment> 
  );
};

export default PlaceItem;
