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
    <section className="absolute z-10 top-3 right-1/3 flex w-96">
      <input
        className=" flex-grow p-2 justify-center items-center"
        onChange={onChange}
        type="text"
        name="search"
        value={title}
      />
      <button className="bg-white pr-2 justify-center items-center" onClick={onClick}>
        <FaSearch></FaSearch>
      </button>
    </section>
  );
}

export default SearchBar;
