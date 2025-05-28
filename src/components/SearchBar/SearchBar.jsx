import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

 const SearchBar = ({onSearch}) => 
 {
     
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.searchQuery.value.trim();
        if (query === "") {
            toast.error("You should write something to make this button work", {
                icon: "🧐",
                style: {
                    marginTop: "70px",
                    marginRight: "100px",
                    fontSize: "17,5px",
                  },
            })
            return
        }
        onSearch(query);
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