import { onAuthStateChanged, getAuth } from 'firebase/auth';
import React, { useContext, createContext, useState, useEffect } from 'react'
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js'


const newContext = createContext()

const ContextWrapper = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null);
    const [userImageURL, setUserImageURL] = useState("/defaultAvtar.jpg");
    const [userName, setuserName] = useState("User")
    const [userEmail, setUserEmail] = useState("default.email@gmail.com")
    const [houseList, setHouseList] = useState([])

    useEffect(() => {
        try {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
                setIsLoading(false)
                setUserImageURL(user.photoURL)
                setuserName(user.displayName)
                setUserEmail(user.email)
            })


        } catch (error) {
            console.log("error in cheaking is user logeed in or not: ", error)
            setIsLoading(false)
        }

        const fetchingData = async () => {

            try {
                const q = query(collection(db, 'propertyListing'));
                const querySnapshot = await getDocs(q);

                let houseList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));


                setHouseList(houseList);
                console.log(houseList);

            } catch (error) {
                console.log("error in fetching list: ", error);
            }
        };
        fetchingData();


    }, [onAuthStateChanged])

    return (
        <newContext.Provider value={{ currentUser, isLoading, userImageURL, userName, userEmail, setUserImageURL, houseList }}>
            {children}
        </newContext.Provider>
    )
}

const myContext = () => useContext(newContext)

export { ContextWrapper, myContext }