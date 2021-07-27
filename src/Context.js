import React,{ useContext, useState } from 'react'
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [currentPage, setCurrentPage] = useState({id: null, page:'', links: []})


    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page===text)
        setCurrentPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true)
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return <AppContext.Provider value={{isModalOpen, isSubmenuOpen, openModal, openSubmenu, closeModal, closeSubmenu, location, currentPage}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider };