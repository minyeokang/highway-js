import Highway from '@dogstudio/highway';
import { gsap } from "gsap";


class Fade extends Highway.Transition {
    in({ from, to, trigger, done }) {
        gsap.fromTo(to, {left: '-100%'},{left: '0', onComplete: function(){
          from.remove()
          done()
        }})
      
        
    }
  
    out({ from, trigger, done }) {
      gsap.to(from, {left: '-100%', onComplete: function(){
        done()
      }})
    }
}


export default Fade
