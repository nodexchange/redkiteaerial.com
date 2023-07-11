import { Button } from '../components/Button';

export const Marquee = () => {
 return (
   <>
     <div className="marquee">
       <div className="marquee__inner" aria-hidden="true">
         {[...Array(15)].map((e, i) => (
           <span key={i}><Button>Available for work</Button></span>
         ))}
       </div>
     </div>
   </>
 );
}

export default Marquee;
