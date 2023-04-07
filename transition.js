import Highway from '@dogstudio/highway';
import { gsap } from "gsap";


class Fade extends Highway.Transition {
    // Built-in methods
    in({ from, to, trigger, done }) {
        gsap.fromTo(to, {left: '-100%'},{left: '0', onComplete: function(){
          done()
        }})
    }
  
    out({ from, trigger, done }) {
      done()
    }
}
// Don`t forget to export your renderer
export default Fade;