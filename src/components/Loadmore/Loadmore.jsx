import s from "./Loadmore.module.css"
const Loadmore = ({ onClick }) => {
    return (
        <>
            <button className={s.button} type="submit" onClick={onClick}>Load more</button>
        </>
    )
}
export default Loadmore;