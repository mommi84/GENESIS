import {ReplaySubject} from 'rx';
import defaultState from './defaultstate';

// actions
import get$, {getAnnotations} from './get';
import status$ from './status';

// create result store stream
const subj = new ReplaySubject(1);

// plug actions
get$.subscribe(subj);
status$.subscribe(subj);

// create stream
const fox$ = subj.startWith(defaultState)
// combine results
.scan((state, data) => state.merge(data));

export {getAnnotations};
export default fox$;