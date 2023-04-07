import Highway from '@dogstudio/highway';
import { gsap } from "gsap";

class CustomRenderer extends Highway.Renderer {
    // Hooks/methods
    onLeave() { 
      console.log('hello')
      
     }
  
  }

  export default CustomRenderer