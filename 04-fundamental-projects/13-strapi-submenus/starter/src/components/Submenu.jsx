import { useGlobalContext } from '../contexts/Context';
import sublinks from '../data';
import {useRef} from 'react';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((link) => link.pageId === pageId);
  const submenuRef = useRef(null);

  const handleOnMouseLeave = (e) => {
    const submenu = submenuRef.current;
    const result = submenu.getBoundingClientRect();
    if (e.clientX < result.left - 1 || e.clientX > result.right - 1 || e.clientY > result.bottom) {
      setPageId(null);
    }
  };

  return (
    <div className={currentPage ? 'submenu show-submenu' : 'submenu'} onMouseLeave={handleOnMouseLeave} ref={submenuRef}> 
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" style={{gridTemplateColumns:currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr'}}>{currentPage?.links?.map((link) => {
        const {id, url, label, icon} = link;
        return (
          <a key={id} href={url}>
            {icon}
            {label}
          </a>
        );
      })}</div>
    </div>
  );
}

export default Submenu;