
import { usePathname  } from 'next/navigation';
const isLinkActive = (href : any) => {
    return usePathname() === href;
  };

  export default isLinkActive