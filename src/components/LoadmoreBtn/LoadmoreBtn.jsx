import s from "./LoadmoreBtn.module.css"
const LoadmoreBtn = ({ onClick }) => {
    return (
        <>
            <button className={s.button} type="submit" onClick={onClick}>Load more</button>
        </>
    )
}
export default LoadmoreBtn;