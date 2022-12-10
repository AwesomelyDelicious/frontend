import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { KeywordRecoil, SearchInputRecoil } from "../recoil/inputRecoil";
function SearchBar(props) {
  let [title, setTitle] = useRecoilState(SearchInputRecoil);
  let [keyword, setKeyword] = useRecoilState(KeywordRecoil);
  let onChange = (e) => {
    setTitle((title) => {
      return e.target.value;
    });
  };

  let onClick = () => {
    setKeyword(() => title);
    setTitle("");
  };

  return (
    <section>
      <input onChange={onChange} type="text" name="search" value={title} />
      <button onClick={onClick}>
        <FaSearch></FaSearch>
      </button>
    </section>
  );
}

export default SearchBar;
