import s from './PersonalProductCard.module.css'
import {FC} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../BLL/store";
import {ProductDataType} from "../../../BLL/types";
import {KeyboardBackspace} from "@material-ui/icons";


export const PersonalProductCard: FC = () => {
    const params = useParams()
    const productData = useSelector<AppRootStateType, ProductDataType[]>(state => state.productData.data)
    const product = productData.find(elem => elem.productID === params.productID?.slice(1))

    // useEffect(() => {
    //     catalogAPI.getProduct(params.productID?.slice(1))
    //         .then(response => {
    //             console.log(response)
    //         })
    // }, [params.productID])

    return (
        <section className={s.contentContainer}>
            <div className={s.backLink}>
                <NavLink to='/catalog'> <KeyboardBackspace/> Back </NavLink>
            </div>
            {product &&
                <div className={s.productCardContainer}>
                    <h2> {product.productName} </h2>
                    <div className={s.photoAndDescription}>
                        <img src={product.productPhoto} alt='productPhoto' className={s.productPhoto}/>
                        <div className={s.description}>
                            Описание:
                            <div> { product.productDescription}</div>
                        </div>
                    </div>
                </div>
            }


        </section>
    )
}