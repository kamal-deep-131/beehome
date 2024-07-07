import React, { useEffect, useState } from 'react'
import { myContext } from '../context/Context.jsx'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { db } from '../firebase.js'
import { getAuth } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore';

const Profile = () => {
    const { userImageURL, userName, userEmail } = myContext()
    const [listingsData, setListingsData] = useState([]);

    useEffect(() => {
        const fetchingData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;
            try {
                const q = query(collection(db, 'propertyListing'), where('userRef', '==', user.uid));
                const querySnapshot = await getDocs(q);

                let listingsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));


                setListingsData(listingsData);
                console.log(listingsData);

            } catch (error) {
                console.log("error in fetching list: ", error);
            }
        };
        fetchingData();
    }, []);




    return (
        <section className='flex flex-col gap-2 items-start justify-start  w-full p-6 md:p-20'>
            <img className="mask mask-circle w-16 mt-20" src={userImageURL} alt='user-image' loading='lazy' />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full">
                <h3 className='text-2xl md:text-4xl font-bold pb-4'>Welcome, {userName}</h3>
                <Link to='/create-listing'>
                    <button className='btn text-myBg font-semibold bg-mainColor rounded-full px-6 py-1 border-2 border-mainColor hover:border-2 hover:border-mainColor hover:bg-transparent hover:text-mainColor'>
                        Add House</button>
                </Link>
            </div>

            <div className='flex items-center text-sm gap-1'>
                <p className='text-slate-500'>{userEmail} </p>
                <div className='ml-4 bg-blueBg rounded-full w-10 h-10 flex items-center justify-center'>
                    <img src="/arrow-dark.svg" alt="arrow to left" />
                </div>
            </div>

            <div className="divider before:bg-mainColor after:bg-mainColor before:opacity-100"></div>

            <h3 className='text-2xl md:text-4xl  font-bold pb-4'>My Property Listings</h3>
            <div className='flex flex-col md:flex-row md:items-center text-sm gap-1'>
                <p className='text-slate-500'>Explore all properties listed by You </p>
                <p className='text-textColor'>View all {listingsData.length} listings</p>
                <div className='md:ml-4 bg-blueBg rounded-full w-5 md:w-10 h-5 md:h-10 flex items-center justify-center'>
                    <img src="/arrow-dark.svg" alt="arrow to left" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {
                    listingsData.map((houseDetails, index) => (
                        <Card houseDetail={houseDetails} key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default Profile