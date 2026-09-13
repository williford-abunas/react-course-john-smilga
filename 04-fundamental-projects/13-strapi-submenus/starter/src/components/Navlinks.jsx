import sublinks from "../data";
import { useGlobalContext } from "../contexts/Context";

const Navlinks = () => {
    const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page} = link;
        return <button key={pageId} className="nav-link" onMouseEnter={() => setPageId(pageId)}>
          {page}
        </button>;
      })}
    </div>
  );
};

export default Navlinks;