import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './Context'
import { FaArrowRight } from 'react-icons/fa'



const Modal = () => {
    const{isModalOpen, closeModal} = useGlobalContext();
    return <section className={`${isModalOpen? 'modal-section show':'modal-section'}`}>
        <div className="modal-container">
            <button className="close-modal-btn" onClick={closeModal}><FaTimes></FaTimes></button>
            <div className="modal-links">
               {
                   sublinks.map((item) => {
                       const {id, links, page} = item;
                       return <article key={id} className="item">
                           <h2>{page}</h2>
                           <div className="modal-sublinks">
                               {
                                   links.map((sublinks, index) => {
                                       const {label, icon, url} = sublinks;
                                       return <a key={index} href={url}>
                                           <span>{icon}</span>  {label}
                                       </a>
                                   })
                               }
                           </div>
                       </article>
                   })
               }
            </div>
            <button className="btn modal-signIn-btn">sign in <FaArrowRight></FaArrowRight></button>
        </div>
    </section>
}

export default Modal