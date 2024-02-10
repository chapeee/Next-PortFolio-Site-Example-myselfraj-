
import { usePathname  } from 'next/navigation';
const IsLinkActive = (href : any) => {
    return usePathname() === href;
  };

  export default IsLinkActive