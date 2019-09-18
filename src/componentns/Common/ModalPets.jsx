import React from 'react'
import Modal from '@material-ui/core/Modal';

const ModalPets = ({children, pet}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>
        {children}
      </div>
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        style={{overflowY: 'scroll'}}
      >
        <div className='modal-window'>
          <div>
            <img className='modal-window__image' src={require(`../../image/${pet.img}`)} alt={pet.name}/>
          </div>
          <div>
            <h3 className='modal-window__name'>{pet.name}</h3>
            <p className='modal-window__beer'>pet breed</p>
            <p className='modal-window__about'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. 
              Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. 
              Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.
            </p>
            <ul className='modal-window__ul'>
              <li className='modal-window__li'>Age: 2 month</li>
              <li className='modal-window__li'>Inoculations: none</li>
              <li className='modal-window__li'>Diseases: none</li>
              <li className='modal-window__li'>Parasites: none</li>
            </ul>
          </div>
          <button onClick={handleClose} className='modal-window__close'>X</button>
        </div>
      </Modal>
    </div>
  )
}

export default ModalPets