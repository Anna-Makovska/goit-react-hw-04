import s from "./SearchBar.module.css";


 const SearchBar = ({onSearch}) => 
 {
     
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(e.target.elements.searchQuery.value);
        e.target.reset();
        
     };
     
     
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input className={s.input}
                name="searchQuery"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photoes"
            >
            </input>
            <button className={s.button} type="submit" >Submit</button>
        </form>
    )
}
export default SearchBar;