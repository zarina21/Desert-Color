import QueryingClass from "../../../queryingclass";

export const getProducts = async () => {
    const productsCollectionRef = collection(db, 'Productos');
    const productsSnapshot = await getDocs(productsCollectionRef);
    const products = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    }));
    return products;
    };
