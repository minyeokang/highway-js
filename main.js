import Highway from '@dogstudio/highway';


// Import Transitions
import Fade from './transition';
import CustomRenderer from './renderer';

// Call Highway.Core once.
// Relate transitions to pages with the label of the `data-router-view`.
const H = new Highway.Core({
 
  transitions: {
    default: Fade,
  },
  renderers: {
    about: CustomRenderer
  }
  
});

