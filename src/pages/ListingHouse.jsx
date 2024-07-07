import React, { useState } from 'react';
import { db, storage } from '../firebase.js';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-hot-toast'
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const dummyImage = "/dummy-placeholder.png"

const ListingHouse = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        image: null,
        regularPrice: "",
        discountedPrice: "",
        propertyName: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        propertyType: ""
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        // console.log(name)
        // console.log("hello")
        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;

        try {
            let imageURL = '';
            if (formData.image) {
                try {
                    const imageRef = ref(storage, `images/${formData.image.name}`);
                    console.log(formData.image.name)
                    console.log(imageRef)
                    await uploadBytes(imageRef, formData.image);
                    imageURL = await getDownloadURL(imageRef);
                    console.log(imageURL)
                } catch (error) {
                    toast.error("Image is not Uploaded")
                    console.error('Error in image uplaoing: ', error)
                }
            }
            else {
                imageURL = dummyImage
            }


            await addDoc(collection(db, 'propertyListing'), {
                imageurl: imageURL,
                regularPrice: formData.regularPrice,
                discountedPrice: formData.discountedPrice,
                propertyName: formData.propertyName,
                address: formData.address,
                bedrooms: formData.bedrooms,
                bathrooms: formData.bathrooms,
                area: formData.area,
                propertyType: formData.propertyType,
                timestamp: new Date(),
                userRef: user.uid, //user refrence
            });

            console.log('Document successfully written!');
            toast.success("House Listed Sucessfully!!")
            navigate('/profile')
        } catch (error) {
            console.log("error in Listing: ", error)
            toast.error("Can't list House. Something went wrong")
            navigate('/create-listing')
        }
    };

    return (
        <section>
            <div className="p-4 flex flex-col items-center justify-center md:p-8 bg-blueBg min-h-screen">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 pt-20">List Your Property</h2>
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">

                    {/* Image */}
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Image</span>
                        </label>
                        <input
                            type="file"
                            data-input="image"
                            name='image'
                            required
                            className="file-input file-input-bordered w-full focus:outline-none"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label" htmlFor="regularPrice">
                            <span className="label-text">Regular Price</span>
                        </label>
                        <input
                            type="text"
                            id="regularPrice"
                            name="regularPrice"
                            required
                            value={formData.regularPrice}
                            onChange={handleChange}
                            className="input input-bordered otline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="discountedPrice">
                            <span className="label-text">Discounted Price</span>
                        </label>
                        <input
                            type="text"
                            id="discountedPrice"
                            required
                            name="discountedPrice"
                            value={formData.discountedPrice}
                            onChange={handleChange}
                            className="input input-bordered otline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="propertyName">
                            <span className="label-text">Property Name</span>
                        </label>
                        <input
                            type="text"
                            id="propertyName"
                            name="propertyName"
                            required
                            value={formData.propertyName}
                            onChange={handleChange}
                            className="input input-bordered otline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="address">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            id="address"
                            required
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="input input-bordered otline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="bedrooms">
                            <span className="label-text">Bedrooms</span>
                        </label>
                        <input
                            type="number"
                            id="bedrooms"
                            name="bedrooms"
                            required
                            min={0}
                            value={formData.bedrooms}
                            onChange={handleChange}
                            className="input input-bordered otline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="bathrooms">
                            <span className="label-text">Bathrooms</span>
                        </label>
                        <input
                            type="number"
                            id="bathrooms"
                            name="bathrooms"
                            min={0}
                            required
                            value={formData.bathrooms}
                            onChange={handleChange}
                            className="input input-bordered otline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="area">
                            <span className="label-text">Area (sq ft)</span>
                        </label>
                        <input
                            type="number"
                            id="area"
                            name="area"
                            required
                            min={1}
                            value={formData.area}
                            onChange={handleChange}
                            className="input input-bordered otline-none focus:outline-none focus:border-mainColor w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="propertyType">
                            <span className="label-text">Property Type</span>
                        </label>
                        <select
                            id="propertyType"
                            name="propertyType"
                            required
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="input input-bordered otline-none focus:outline-none focus:border-mainColor w-full"
                        >
                            <option value="" disabled>Select property type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="text-myBg font-semibold bg-mainColor rounded-full px-6 py-3 ">Submit</button>
                    </div>
                </form>
            </div>




        </section>
    );
};

export default ListingHouse;
