import Highway from '@dogstudio/highway';


// Import Transitions
import fade from './transition';

// Call Highway.Core once.
// Relate transitions to pages with the label of the `data-router-view`.
const H = new Highway.Core({
 
  transitions: {
    default: fade,
  }
});